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

  img {
    width: 60%;
    display: block;
    margin: 10% auto;
    border-radius: 20px;
  }

  .fm-side-heading {
    text-align: center;
    color: white
  }
`;

export const StyledCard = styled.div`
  background-color: white;
  border-radius: 20px;
  border: 1px solid #2b7a78;
  min-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledCardHeading = styled.h3`
  text-align: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #17252a;
  padding: 20px 0;
  margin: 0;
  color: white;
`;

export const StyledCardContent = styled.div`
  padding: 30px 40px 5px 40px;
  button {
    background-color: #17252a;
    border-radius: 20px;
    border: 1px solid #17252a;
  }
`;

export const StyledButton = styled.button`
  background-color: #17252a;
  border-radius: 20px;
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
      border-radius: 20px;
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
