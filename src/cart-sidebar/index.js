import React, { Component } from "react";
import styled from "styled-components";
import { string, number, arrayOf, shape, any } from "prop-types";

export class CartSidebar extends Component {
  static propTypes = {
    countOfElement: number.isRequired,
    priceOfElement: number.isRequired,
    products: arrayOf(
      shape({
        id: any.isRequired,
        name: string.isRequired,
        count: number.isRequired,
        price: number.isRequired
      }).isRequired
    ).isRequired
  };

  render() {
    return (
      <Wrapper>
        <Name>CART</Name>
      </Wrapper>
    );
  }
}

const Name = styled.div``;
const Wrapper = styled.div``;
