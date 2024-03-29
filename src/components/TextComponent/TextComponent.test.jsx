import { screen } from "@testing-library/react";
import { TextComponent } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<TextComponent />", () => {
  it("should render a text", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
