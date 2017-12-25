import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from ".";

storiesOf("Button", module)
  .add("normal", () => (
    <Button onClick={action("onClick")}>Simple button</Button>
  ))
  .add("disabled", () => (
    <Button onClick={action("onClick [SHOULD NOT BE LOGGED]")} disabled>
      Simple button
    </Button>
  ));
