import React, { Component } from "react";
import styled from "styled-components";
import { func, shape, arrayOf, string, any, number } from "prop-types";

import { ProductCard } from "../product-card";
import { Panel } from "../panel";

export class CategoryCard extends Component {
  static propTypes = {
    name: string.isRequired,
    products: arrayOf(
      shape({
        id: any.isRequired,
        name: string.isRequired,
        inStock: number.isRequired,
        price: number.isRequired,
        inCart: number.isRequired
      }).isRequired
    ).isRequired,
    onAddProductToCart: func.isRequired
  };

  render() {
    return (
      <Panel>
        <Wrapper>
          <Name>{this.props.name}</Name>
          <ProductsList>
            {this.props.products.slice(0, 4).map(product => (
              <ProductWrapper key={product.id}>
                <ProductCard
                  {...product}
                  onAddToCart={this.props.onAddProductToCart}
                />
              </ProductWrapper>
            ))}
          </ProductsList>
        </Wrapper>
      </Panel>
    );
  }
}

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Name = styled.div``;

const ProductsList = styled.div`
  display: flex;
`;

const ProductWrapper = styled.div`
  width: 25%;
  padding: 4px;
`;
