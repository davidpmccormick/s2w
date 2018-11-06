import { shallowMount } from '@vue/test-utils';
import ToggleSwitch from '~/components/ToggleSwitch';

test('emits toggled value when clicked', () => {
  const wrapper = shallowMount(ToggleSwitch, {
    propsData: {
      value: false,
      label: 'test'
    }
  });
  const toggle = wrapper.find('.toggle-switch__toggle');

  wrapper.trigger('click');

  expect(wrapper.emitted().input[0]).toEqual([true]);
  expect(wrapper.element).toMatchSnapshot();

  wrapper.setProps({value: true});

  expect(wrapper.element).toMatchSnapshot();
});
