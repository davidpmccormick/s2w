/**
 * @jest-environment node
 */

import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';
import { Object } from 'core-js';
import request from 'supertest';

let nuxt = null;

describe('Index page', () => {
  beforeEach(async () => {
    const rootDir = resolve(__dirname, '..');
    let config = {};

    config = require(resolve(rootDir, 'nuxt.config.js'));
    config.rootDir = rootDir;
    config.dev = false;
    nuxt = new Nuxt(config);

    await new Builder(nuxt).build();
    await nuxt.listen(4000, 'localhost');
  }, 30000);

  test('/ renders html', async () => {
    const context = {};
    const { html } = await nuxt.renderRoute('/', context);
    expect(html).toContain('Somewhere to wear');
  });

  test('/thankyou renders html', async () => {
    const context = {};
    const { html } = await nuxt.renderRoute('/thankyou', context);
    expect(html).toContain('Thank you');
  });

  test('/errrrr renders html', async () => {
    const context = {};
    const { html } = await nuxt.renderRoute('/errrrr', context);
    expect(html).toContain('Nowhere to wear');
  });

  afterEach(() => {
    nuxt.close();
  });
});
