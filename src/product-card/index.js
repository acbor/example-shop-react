import React, { Component } from "react";
import styled from "styled-components";
import { number, func, element, bool } from "prop-types";

import { Button } from "../button";
import { Panel } from "../panel";

export class ProductCard extends Component {
  static propTypes = {
    label: element.isRequired,
    price: number.isRequied,
    notInStock: bool,
    onChange: func.isRequired
  };

  static defaultProps = {
    notInStock: false
  };

  render() {
    return (
      <Panel>
        <Wrapper>
          <Label>{this.props.label}</Label>
          {this.props.notInStock ? (
            "Not in stock"
          ) : (
            <Button>Add to cart (+ ${this.props.price})</Button>
          )}
        </Wrapper>
      </Panel>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div``;
