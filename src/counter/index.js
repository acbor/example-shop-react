import React, { Component } from "react";
import styled from "styled-components";
import { number, func } from "prop-types";

import { Button } from "../button";
import { Panel } from "../panel";

export class Counter extends Component {
  static propTypes = {
    value: number,
    step: number,
    minValue: number,
    maxValue: number,
    onChange: func.isRequired
  };

  static defaultProps = {
    value: 0,
    step: 1,
    minValue: -Infinity,
    maxValue: Infinity
  };

  change(delta) {
    const newValue = this.props.value + delta;

    if (newValue >= this.props.minValue && newValue <= this.props.maxValue) {
      return this.props.onChange(newValue);
    }
  }

  handleDecButtonClick = event => {
    this.change(-this.props.step);
  };

  handleIncButtonClick = event => {
    this.change(+this.props.step);
  };

  render() {
    return (
      <Panel>
        {this.props.children && <Label>{this.props.children}</Label>}
        <Button
          onClick={this.handleDecButtonClick}
          disabled={this.props.value === this.props.minValue}
        >
          <ButtonContent>-</ButtonContent>
        </Button>
        <Value>{this.props.value}</Value>
        <Button
          onClick={this.handleIncButtonClick}
          disabled={this.props.value === this.props.maxValue}
        >
          <ButtonContent>+</ButtonContent>
        </Button>
      </Panel>
    );
  }
}

const Value = styled.div`
  min-width: 32px;

  padding: 0 16px;

  text-align: center;
`;

const ButtonContent = styled.div`
  width: 8px;
`;

const Label = styled.div`
  min-width: 48px;

  padding-right: 8px;
`;
