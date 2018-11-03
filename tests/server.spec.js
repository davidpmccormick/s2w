/**
 * @jest-environment node
 */

import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';
import request from 'supertest';

let nuxt = null;

describe('Index page', () => {
  beforeAll(async () => {
    const rootDir = resolve(__dirname, '..');
    let config = {};

    config = require(resolve(rootDir, 'nuxt.config.js'));
    config.rootDir = rootDir;
    config.dev = false;
    nuxt = new Nuxt(config);

    await new Builder(nuxt).build();
  }, 30000);

  test('/ 200', () => {
    return request(nuxt.renderer.app)
      .get('/')
      .expect(200);
  });

  test('/thankyou 200', () => {
    return request(nuxt.renderer.app)
      .get('/thankyou')
      .expect(200);
  });

  test('/errrrr 404', () => {
    return request(nuxt.renderer.app)
      .get('/errrrr')
      .expect(404);
  });

  test.only('/experiments 200', () => {
    return request(nuxt.renderer.app)
      .get('/experiments')
      .expect(200);
  });

  afterAll(() => {
    nuxt.close();
  });
});
