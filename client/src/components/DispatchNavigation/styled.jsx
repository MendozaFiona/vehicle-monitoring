import styled from "styled-components";

export const StyledNavigation = styled.div`
  padding: 0;
  margin-top: 0;

  button {
    border-radius: 0;
    border: 0;
    margin: 0;
    padding: 20px;
  }

  .fm-no-top {
    border-top: 0;
  }

  .active {
    background-color: #3aafa9;
    color: black;
    font-weight: bold;
  }
`;

export const StyledGrid = styled.div`
  grid-template-columns: 30% auto;
`;
