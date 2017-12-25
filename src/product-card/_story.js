import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ProductCard } from ".";

storiesOf("ProductCard", module)
  .add("normal", () => (
    <ProductCard
      id="1"
      name="Name"
      price={100}
      inStock={5}
      inCart={0}
      onAddToCart={action("onAddToCart")}
    />
  ))
  .add("not in stock", () => (
    <ProductCard
      id="1"
      name="Name"
      price={100}
      inStock={5}
      inCart={5}
      onAddToCart={action("onAddToCart")}
    />
  ));
