import styled from "styled-components";

export const StyledPageContent = styled.div`
  margin: 60px 10%;
`;

export const StyledSideGrid = styled.div`
  grid-template-columns: 45% auto;

  .fm-content {
    padding-top: 5%;
  }
`;

export const StyledSideContent = styled.div`
  background-color: #17252a;
  width: 100%;
  height: 100vh;
  border-bottom-right-radius: 10px;

  img {
    width: 60%;
    display: block;
    margin: 10% auto;
    border-radius: 20px;
  }

  .fm-side-heading {
    text-align: center;
    color: white;
  }
`;

export const StyledCard = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #2b7a78;
  min-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledCardHeading = styled.h3`
  text-align: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: #17252a;
  padding: 20px 0;
  margin: 0;
  color: white;
`;

export const StyledCardContent = styled.div`
  padding: 30px 40px 5px 40px;
  button {
    background-color: #17252a;
    border-radius: 10px;
    border: 1px solid #17252a;
  }
`;

export const StyledButton = styled.button`
  background-color: #17252a;
  border-radius: 10px;
  border: 1px solid #17252a;
`;

export const StyledInputIcon = styled.div`
  position: relative;
  .icon {
    position: absolute;
    right: 23px;
    top: 22px;
    color: white;
    opacity: 0.5;
  }
`;

export const StyledForm = styled.div`
  form {
    label {
      color: #17252a;
    }
    input:not(.fm-checkbox),
    select {
      max-height: 40px;
      min-height: 40px;
      border-radius: 10px;
      background-color: #def2f1;
      font-size: 16px;
      padding: 0 15px;
    }
    .fm-checkbox {
      margin-left: 10px;
    }
    .fm-checkbox:checked {
      background-color: #2b7a78;
      border-color: #2b7a78;
    }
  }
`;

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

export const StyledTable = styled.div`
  overflow-y: auto;

  table {
    margin-top: 10px;
    th,
    td {
      border-color: #17252a;
      color: black;
    }

    th {
      font-size: 18px;
    }

    button {
      height: 20px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  select {
    max-width: 200px;
    max-height: 40px;
    border-radius: 10px;
    font-size: 16px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #def2f1;
  }
`;
