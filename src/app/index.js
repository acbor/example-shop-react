import React, { Component } from "react";

import { CategoryCard } from "../category-card";

export class App extends Component {
  state = {
    categories: {
      ids: [1, 2, 3],
      entities: {
        1: { id: 1, name: "Pads", productsIds: [1] },
        2: { id: 2, name: "Tools", productsIds: [3, 4] },
        3: { id: 3, name: "Food", productsIds: [] }
      }
    },

    products: {
      ids: [1, 3],
      entities: {
        1: { id: 1, name: "DualShock 4", price: 100, count: 3 },
        3: { id: 3, name: "Зажигалка 200 евро", price: 199, count: 1 },
        4: { id: 4, name: "Зажигалка 100 евро", price: 299, count: 4 }
      }
    },

    cart: {}
  };

  moveToCart(productId) {
    this.setState(state => {
      const inStock = state.products.entities[productId].count;

      if (inStock > 0) {
        return {
          products: {
            ...state.products,
            entities: {
              ...state.products.entities,
              [productId]: {
                ...state.products.entities[productId],
                count: inStock - 1
              }
            }
          },
          cart: {
            ...state.cart,
            [productId]: (state.cart[productId] || 0) + 1
          }
        };
      }
    });
  }

  handleAddProductToCart = productId => {
    this.moveToCart(productId);
  };

  renderCart() {
    return <div>{JSON.stringify(this.state.cart)}</div>;
  }

  render() {
    return (
      <div>
        {this.state.categories.ids.map(categoryId => (
          <CategoryCard
            key={categoryId}
            name={this.state.categories.entities[categoryId].name}
            products={this.state.categories.entities[
              categoryId
            ].productsIds.map(
              productId => this.state.products.entities[productId]
            )}
            onAddProductToCart={this.handleAddProductToCart}
          />
        ))}
        {this.renderCart()}
      </div>
    );
  }
}
