import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
  it("should display text", () => {
    const buttonProps = {
      text: "Hola mundo",
      type: "button",
      variant: "black",
    };
    const wrapper = mount(Button, { props: { ...buttonProps } });

    expect(wrapper.find("span").text()).toEqual(buttonProps.text);
  });
});
