import styled from "styled-components";

export const StyledNavigation = styled.div`
  padding: 0;
  margin-top: 0;

  button {
    border-radius: 0;
    border: 10px solid #3aafa9;
    border-right: 0;
    border-left: 0;
    margin: 0;
    padding: 20px;
  }

  .fm-no-top {
    border-top: 0;
  }

  .active {
    border-right: 20px solid #3aafa9;
  }
`;

export const StyledGrid = styled.div`
  grid-template-columns: 30% auto;
`;
