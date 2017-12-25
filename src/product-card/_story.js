import React, { Component } from "react";
import { compose, withState, withHandlers, withProps } from "recompose";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ProductCard } from ".";

storiesOf("ProductCard", module)
  .add("normal", () => (
    <ProductCard label="Name" price={100} onChange={action("onChange")} />
  ))
  .add("not in stock", () => (
    <ProductCard
      label="Name"
      price={100}
      notInStock
      onChange={action("onChange")}
    />
  ));
