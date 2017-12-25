import React, { Component } from "react";
import { compose, withState, withHandlers, withProps } from "recompose";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Counter } from ".";

const CounterExample = compose(
  withState("counter", "setCounter", 0),
  withHandlers({
    onChange: ({ setCounter }) => newCounter => {
      console.log(`new counter value ${newCounter}`);
      setCounter(newCounter);
    }
  }),
  withProps(({ counter }) => ({ value: counter }))
)(Counter);

storiesOf("Counter", module)
  .add("normal", () => <Counter value={5} onChange={action("onChange")} />)
  .add("with label", () => (
    <Counter value={5} onChange={action("onChange")}>
      Counter:{" "}
    </Counter>
  ))
  .add("with state", () => <CounterExample />)
  .add("with state and step", () => <CounterExample step={5} />)
  .add("with state and range", () => (
    <CounterExample minValue={0} maxValue={5} />
  ));
