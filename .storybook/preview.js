import React from "react"
import {withA11y} from "@storybook/addon-a11y"
import {addDecorator} from "@storybook/react";

addDecorator(withA11y);
export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}