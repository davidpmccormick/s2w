import { shallowMount } from '@vue/test-utils';
import SignupForm from '~/components/SignupForm';
import jsonp from 'jsonp';
import * as track from '~/utils/track';
import * as parseMailchimpMessage from '~/utils/parse-mailchimp-message';

jest.spyOn(parseMailchimpMessage, 'default');
jest.mock('~/utils/track', () => jest.fn());
jest.mock('jsonp');

describe('SignupForm', () => {
  test('renders', () => {
    const wrapper = shallowMount(SignupForm);

    expect(wrapper.text()).toContain('sign up');
  });

  test('bails if input is empty', () => {
    const wrapper = shallowMount(SignupForm);

    wrapper.find('form').trigger('submit');

    expect(jsonp).not.toHaveBeenCalled();
    expect(wrapper.text()).toContain('Try again');
  });

  test(`bails if input value isn't email-shaped`, () => {
    const wrapper = shallowMount(SignupForm);
    const input = wrapper.find('input');

    input.element.value = 'a@b.';
    input.trigger('input');

    wrapper.find('form').trigger('submit');

    expect(jsonp).not.toHaveBeenCalled();
    expect(wrapper.text()).toContain('Try again');
  });

  test('empties message on input', () => {
    const wrapper = shallowMount(SignupForm);
    const input = wrapper.find('input');

    wrapper.find('form').trigger('submit');

    expect(wrapper.text()).toContain('Try again');

    input.element.value = 'a';
    input.trigger('input');

    expect(wrapper.text()).not.toContain('Try again');
  });

  test('calls jsonp when input is in valid email format', () => {
    const wrapper = shallowMount(SignupForm);
    const input = wrapper.find('input');

    input.element.value = 'a@b.co';
    input.trigger('input');
    wrapper.find('form').trigger('submit');

    expect(wrapper.text()).toContain('...');
    expect(jsonp).toHaveBeenCalledTimes(1);
    expect(jsonp).toHaveBeenCalledWith(`https://somewheretowear.us19.list-manage.com/subscribe/post-json?u=641ee46704f17c07dc0e3c08e&amp;id=4e403bb31e&EMAIL=a@b.co`, {"param": "c"}, expect.any(Function));
  });

  test('focuses the input after attempted submit', () => {
    const wrapper = shallowMount(SignupForm);
    const input = wrapper.find('input');

    jest.spyOn(input.element, 'focus');
    wrapper.find('form').trigger('submit');

    expect(input.element.focus).toHaveBeenCalledTimes(1);
  });

  test('sends ga tracking events', () => {
    const wrapper = shallowMount(SignupForm);
    const input = wrapper.find('input');

    jsonp.mockImplementationOnce(() => {
      parseMailchimpMessage.default('blah');
    });

    input.element.value = 'test+1@gmail.com';
    input.trigger('input');
    wrapper.find('form').trigger('submit');

    expect(parseMailchimpMessage.default).toHaveBeenCalledWith('blah');
    expect(track.default).toHaveBeenCalledWith({
      command: 'send',
      hitType: 'event',
      category: 'error',
      action: 'parseMailchimpMessage',
      label: 'blah'
    });
  });
});
