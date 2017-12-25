import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ProductCard } from ".";

storiesOf("ProductCard", module)
  .add("normal", () => (
    <ProductCard name="Name" price={100} onChange={action("onChange")} />
  ))
  .add("not in stock", () => (
    <ProductCard
      name="Name"
      price={100}
      notInStock
      onChange={action("onChange")}
    />
  ));
