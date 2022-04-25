import { mount } from "@vue/test-utils";
import Checkbox from "./Checkbox.vue";

describe("Checkbox", () => {
  it("should display label value", () => {
    const checboxProps = {
      label: "Hola mundo",
      modelValue: false,
    };
    const wrapper = mount(Checkbox, { props: { ...checboxProps } });

    expect(wrapper.find("label").text()).toEqual(checboxProps.label);
  });

  it("should change model value", () => {
    const checboxProps = {
      label: "Hola mundo",
      modelValue: false,
    };
    const wrapper = mount(Checkbox, { props: { ...checboxProps } });

    expect(wrapper.find("label").text()).toEqual(checboxProps.label);
  });
});
