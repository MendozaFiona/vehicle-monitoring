import styled from "styled-components";

//  margin: 60px 220px;
export const StyledPageContent = styled.div`
  margin: 60px 0;
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

export const StyledForm = styled.form`
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
`;

export const StyledPopup = styled.div`
  .overlay {
    visibility: visible;
    opacity: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }

  .popup {
    padding: 30px;
    background: #fff;
    border-radius: 20px;
    border: 10px solid #17252a;
    position: relative;
    text-align: center;

    .content {
      padding: 20px;
    }

    .icon {
      position: absolute;
      right: 23px;
      top: 20px;
      cursor: pointer;
    }
  }

  .form {
    width: 50%;
    margin: 70px auto;

    .content {
      padding: 30px;
      padding-bottom: 10px;

      button {
        margin-top: 20px;
      }
    }
  }

  .confirm {
    width: 30%;
    margin: 300px auto;
  }

  .popup > .grid {
    grid-template-columns: auto auto;
    padding: 15px 30px 0 30px;

    button {
      padding-top: 10px;
      max-height: 50px;
    }
  }
`;
