import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CountSelector } from ".";

storiesOf("CountSelector", module).add("normal", () => (
  <CountSelector price={800} onSubmit={action("onSubmit")} />
));
