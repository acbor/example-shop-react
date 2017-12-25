import React, { Component } from "react";
import styled from "styled-components";
import { any, number, func, string, bool } from "prop-types";

import { Button } from "../button";
import { Panel } from "../panel";

export class ProductCard extends Component {
  static propTypes = {
    id: any.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    notInStock: bool,
    onAddToCart: func.isRequired
  };

  static defaultProps = {
    notInStock: false
  };

  handleAddToCart = () => {
    this.props.onAddToCart(this.props.id);
  };

  render() {
    return (
      <Panel>
        <Wrapper>
          <Label>{this.props.name}</Label>
          {this.props.notInStock ? (
            "Not in stock"
          ) : (
            <Button onClick={this.handleAddToCart}>
              Add to cart (+ ${this.props.price})
            </Button>
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
