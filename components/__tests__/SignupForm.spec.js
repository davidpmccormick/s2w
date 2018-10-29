import { shallowMount } from '@vue/test-utils';
import SignupForm from '../SignupForm';

describe('SignupForm', () => {
  test('renders', () => {
    const wrapper = shallowMount(SignupForm);

    expect(wrapper.text()).toContain('sign up');
  });
});
