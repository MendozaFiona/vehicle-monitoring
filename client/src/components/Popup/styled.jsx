import styled from "styled-components";

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
