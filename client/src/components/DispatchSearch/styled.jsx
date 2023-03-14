import styled from "styled-components";

export const StyledDispatchSearch = styled.div`
  background-color: #17252a;
  padding: 15px 20px 0 20px;
  margin-bottom: 15px;
  border-radius: 10px;

  .grid {
    grid-template-columns: 43% 43% auto;
  }

  button {
    background-color: #def2f1;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    padding: 5px;
    color: #17252a;
    font-size: 16px;
  }

  form {
    color: white;
  }

  input {
    font-size: 17px;
    background-color: #def2f1;
    max-height: 40px;
    min-height: 40px;
    border-radius: 10px;
  }
`;
