import React, { Component } from "react";
import { number, string, func } from "prop-types";
import styled from "styled-components";

import { Button } from "../button";

import { Counter } from "../counter";

export class CartItem extends Component {
  static propTypes = {
    id: number.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    inStock: number.isRequired,
    inCart: number.isRequired,
    onProductInCartChange: func.isRequired,
    onProductDeleteFromCart: func.isRequired
  };

  handleCountChange = newInCart => {
    this.props.onProductInCartChange(this.props.id, newInCart);
  };

  handleProductDeleteFromCart = () => {
    this.props.onProductDeleteFromCart(this.props.id);
  };

  render() {
    return (
      <Wrapper>
        <Label>{this.props.name}</Label>
        <Label>{this.props.price}</Label>
        <Counter
          value={this.props.inCart}
          onChange={this.handleCountChange}
          minValue={1}
          maxValue={this.props.inStock}
        />
        <Button onClick={this.handleProductDeleteFromCart}>Delete</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
const Label = styled.div``;
