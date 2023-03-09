import styled from "styled-components";

export const StyledSearch = styled.div`
  grid-template-columns: 200px auto;
  gap: 0;

  input {
    background-color: #2b7a78;
    border: 5px solid #17252a;
    border-radius: 0 20px 0 0;
    color: white;

    ::placeholder {
      color: white;
      opacity: 0.5;
    }
  }

  input:disabled {
    background-color: gray;
    ::placeholder {
      color: gray;
    }
  }
`;

export const StyledSearchButton = styled.button`
  background-color: #17252a;
  border: 0;
  border-radius: 20px 0 0 20px;
  width: 100%;
`;

export const StyledSearchGroup = styled.div`
  details {
    border: 0;
    background-color: #17252a;
    border-radius: 20px;
    position: relative;
    summary > .fm-filters {
      color: white;
      position: absolute;
      max-height: 0px;
      font-size: 18px;
      right: 60px;
      bottom: 33%;
    }

    summary::after {
      margin-top: -12px;
      margin-right: 25px;
      background-color: white;
      border-radius: 5px;
    }
  }

  details[open] > summary > .fm-filters,
  details[open] > summary > div > .icon {
    display: none;
  }
`;

export const StyledSearchFilter = styled.div`
  padding: 0 50px 20px 50px;

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
      border-radius: 20px;
      background-color: #def2f1;
    }
  }
`;
