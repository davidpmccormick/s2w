import { shallowMount } from '@vue/test-utils';
import SignupForm from '../SignupForm';

describe('SignupForm', () => {
  test('renders', () => {
    const wrapper = shallowMount(SignupForm);

    expect(wrapper.text()).toContain('sign up');
  });

  test('bails if input is empty', () => {
    const wrapper = shallowMount(SignupForm);

    wrapper.find('form').trigger('submit');

    expect(wrapper.text()).toContain('Try again');
  });

  test(`bails if input value isn't email-shaped`, () => {
    const wrapper = shallowMount(SignupForm);
    const input = wrapper.find('input');

    input.element.value = 'a@b.';

    wrapper.find('form').trigger('submit');

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
});
