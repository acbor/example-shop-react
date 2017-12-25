import React, { Component } from "react";
import styled from "styled-components";
import { number, func } from "prop-types";

import { Counter } from "../counter";
import { Panel } from "../panel";
import { Button } from "../button";

export class CountSelector extends Component {
  static propTypes = {
    price: number.isRequired,
    onSubmit: func.isRequired
  };

  state = {
    count: 1
  };

  handleCountChange = count => {
    this.setState({ count });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.total);
  };

  get total() {
    return this.state.count * this.props.price;
  }

  render() {
    return (
      <Wrapper>
        <Panel>
          <Form onSubmit={this.handleSubmit}>
            <CounterWrapper>
              <Counter
                value={this.state.count}
                minValue={1}
                maxValue={10}
                onChange={this.handleCountChange}
              >
                Count:{" "}
              </Counter>
            </CounterWrapper>
            <Button type="submit">Submit (+ ${this.total})</Button>
          </Form>
        </Panel>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: fit-content;
`;

const Form = styled.form`
  display: flex;
`;

const CounterWrapper = styled.div`
  padding-right: 16px;
`;
