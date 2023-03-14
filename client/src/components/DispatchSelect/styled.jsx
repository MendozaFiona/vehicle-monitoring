import styled from "styled-components";

export const StyledFilter = styled.div`
  padding: 0;
  background-color: #17252a;
  text-align: left;
  border-radius: 10px;
  padding-bottom: 15px;

  .fm-search-filter {
    padding: 20px;

    button {
      position: absolute;
      top: 260px;
      height: 40px;
    }

    button:not(.fm-reset) {
      right: 80px;
    }

    .fm-reset {
      left: 80px;
    }
  }
`;
