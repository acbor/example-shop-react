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
    inStock: number.isRequired,
    inCart: number.isRequired,
    onAddToCart: func.isRequired
  };

  handleAddToCart = () => {
    this.props.onAddToCart(this.props.id);
  };

  get canAddToCart() {
    return this.props.inCart < this.props.inStock;
  }

  render() {
    console.log(this.props);
    return (
      <Panel>
        <Wrapper>
          <Label>{this.props.name}</Label>
          {this.canAddToCart ? (
            <Button onClick={this.handleAddToCart}>
              Add to cart (+ ${this.props.price})
            </Button>
          ) : (
            "Not in stock"
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
