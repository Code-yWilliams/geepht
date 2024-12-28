import { ReactElement } from "react";
import * as React from "react";
import { createRoot } from "react-dom/client";

type Components = {
  [key: string]: React.ComponentType<any>;
};

const componentLoader = (components: Components = {}) => {
  document.addEventListener("DOMContentLoaded", () => {
    const componentElements = document.querySelectorAll(
      "[data-component]"
    ) as NodeListOf<HTMLElement>;

    componentElements.forEach((el: HTMLElement) => {
      const data = el.dataset;
      const Component = components[data.component!];

      if (!Component) {
        throw new Error(`Component (${data.component}) not found.`);
      }

      const element: ReactElement = React.createElement(
        Component,
        JSON.parse(data.props!)
      );
      const root = createRoot(el);
      root.render(element);
    });
  });
};

export default componentLoader;
