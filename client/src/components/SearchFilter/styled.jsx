import styled from "styled-components";

export const StyledSearchFilter = styled.div`
  padding: 0 50px 40px 50px;

  label {
    margin: 10px;
    max-height: 30px;
    color: white;
    font-size: 18px;

    input,
    select {
      padding: 0 15px;
      margin: 0 10px 0 10px;
      max-width: 150px;
      min-width: 30px;
      max-height: 35px;
      min-height: 35px;
      font-size: 15px;
      border-radius: 10px;
      background-color: #def2f1;
    }
  }

  button {
    background-color: #def2f1;
    border-radius: 10px;
    border: 0;
    margin-top: 20px;
    padding: 5px;
    color: #17252a;
    max-width: 80px;
    min-width: 80px;
    position: absolute;
    bottom: 5px;
    right: 50px;
    font-weight: bold;
  }
`;
