import styled from "styled-components";

export const StyledFilter = styled.div`
  padding: 0;
  background-color: #17252a;
  text-align: left;
  border-radius: 10px;

  .fm-search-filter {
    padding: 20px;

    button {
      position: absolute;
      top: 240px;
      height: 40px;
      right: 80px;
    }
  }
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

    .no-border {
      border: 0;
    }

    button {
      height: 20px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
