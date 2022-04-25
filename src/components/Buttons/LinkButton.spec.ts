import { mount } from "@vue/test-utils";
import LinkButton from "./LinkButton.vue";

describe("LinkButton", () => {
  it("should display text", () => {
    const buttonProps = {
      text: "Hola mundo",
    };
    const wrapper = mount(LinkButton, { props: { ...buttonProps } });

    expect(wrapper.find("span").text()).toEqual(buttonProps.text);
  });
});
