import styled from "styled-components";

export const Button = styled.button.attrs({ type: "button" })`
  background: none;

  padding: 5px 10px;

  border: 1px solid black;

  cursor: pointer;

  :not(:disabled):hover {
    background: rgba(0, 0, 0, 0.2);
  }

  :disabled {
    color: rgba(0, 0, 0, 0.5);
  }
`;
