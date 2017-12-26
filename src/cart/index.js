import React, { Component } from "react";
import styled from "styled-components";
import { string, number, arrayOf, shape, any, func } from "prop-types";

import { CartItem } from "../cart-item";

export class Cart extends Component {
  static propTypes = {
    products: arrayOf(
      shape({
        id: any.isRequired,
        name: string.isRequired,
        inStock: number.isRequired,
        inCart: number.isRequired,
        price: number.isRequired
      }).isRequired
    ).isRequired,
    onProductInCartChange: func.isRequired,
    onProductDeleteFromCart: func.isRequired
  };

  get totalPrice() {
    return this.props.products.reduce(
      (total, product) => total + product.inCart * product.price,
      0
    );
  }

  render() {
    return (
      <Wrapper>
        <Name>CART</Name>
        <TotalPrice>Total Price: {this.totalPrice}</TotalPrice>
        <CartList>
          {this.props.products.map(product => (
            <CartItemWrapper key={product.id}>
              <CartItem
                {...product}
                onProductInCartChange={this.props.onProductInCartChange}
                onProductDeleteFromCart={this.props.onProductDeleteFromCart}
              />
            </CartItemWrapper>
          ))}
        </CartList>
      </Wrapper>
    );
  }
}

const Name = styled.div``;
const TotalPrice = styled.div`
  color: darkblue;
`;

const CartItemWrapper = styled.div`
  padding: 8px 0;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  margin: 32px 0;
  padding: 8px;
`;

const CartList = styled.div``;
