import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CartItem } from ".";

storiesOf("CartItem", module).add("normal", () => (
  <CartItem
    id={1}
    name="Hello"
    price={100}
    inStock={5}
    inCart={3}
    onProductDeleteFromCart={action("onProductDeleteFromCart")}
    onProductInCartChange={action("onProductInCartChange")}
  />
));
