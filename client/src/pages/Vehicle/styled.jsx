import styled from "styled-components";

export const StyledNavigation = styled.div``;

export const StyledGrid = styled.div`
  grid-template-columns: 200px auto;
`;

export const StyledSearch = styled.div`
  grid-template-columns: 200px auto;
  gap: 0;

  input {
    background-color: #2b7a78;
    border: 5px solid #17252a;
    border-radius: 0 20px 20px 0;
    color: white;

    ::placeholder {
      color: white;
      opacity: 0.5;
    }
  }
`;

export const StyledSearchButton = styled.button`
  background-color: #17252a;
  border: 0;
  border-radius: 20px 0 0 20px;
  width: 100%;
`;
