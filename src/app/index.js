import React, { Component } from "react";
import styled from "styled-components";

import { CategoryCard } from "../category-card";
import { Cart } from "../cart";

export class App extends Component {
  state = {
    categories: {
      ids: [1, 2, 3],
      entities: {
        1: { id: 1, name: "Pads", productsIds: [1] },
        2: { id: 2, name: "Tools", productsIds: [3, 4, 5] },
        3: { id: 3, name: "Food", productsIds: [6] }
      }
    },

    products: {
      ids: [1, 3],
      entities: {
        1: { id: 1, name: "DualShock 4", price: 100, inStock: 3 },
        3: { id: 3, name: "Зажигалка 200 евро", price: 199, inStock: 1 },
        4: { id: 4, name: "Зажигалка 100 евро", price: 299, inStock: 4 },
        5: { id: 5, name: "Дилдо: Черный Властелин", price: 13, inStock: 18 },
        6: { id: 6, name: "Хлебушек", price: 2, inStock: 24 }
      }
    },

    cart: {}
  };

  setInCart(productId, newInCart) {
    this.setState(state => {
      const inStock = state.products.entities[productId].inStock;

      if (newInCart <= inStock) {
        return {
          cart: {
            ...state.cart,
            [productId]: newInCart
          }
        };
      }
    });
  }

  get productsIdsInCart() {
    return Object.keys(this.state.cart)
      .filter(productId => this.state.cart[productId] > 0)
      .sort();
  }

  mapProductsIdsToProducts(productsIds) {
    return productsIds
      .map(productId => this.state.products.entities[productId])
      .map(product => ({
        ...product,
        inCart: this.state.cart[product.id] || 0
      }));
  }

  handleAddProductToCart = productId => {
    const inCart = this.state.cart[productId] || 0;

    this.setInCart(productId, inCart + 1);
  };

  handleProductInCartChange = (productId, newInCart) => {
    this.setInCart(productId, newInCart);
  };

  handleProductDeleteFromCart = productId => {
    this.setInCart(productId, 0);
  };

  render() {
    return (
      <Wrapper>
        {this.state.categories.ids.map(categoryId => (
          <CategoryCard
            key={categoryId}
            name={this.state.categories.entities[categoryId].name}
            products={this.mapProductsIdsToProducts(
              this.state.categories.entities[categoryId].productsIds
            )}
            onAddProductToCart={this.handleAddProductToCart}
          />
        ))}
        <Cart
          products={this.mapProductsIdsToProducts(this.productsIdsInCart)}
          onProductInCartChange={this.handleProductInCartChange}
          onProductDeleteFromCart={this.handleProductDeleteFromCart}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
