import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #17252a;
  border-bottom: 1px solid #17252a;
  width: 100vw;
`;

export const StyledNav = styled.nav`
  padding: 10px 130px 10px 130px;
  a,
  summary,
  summary:focus {
    color: #3aafa9 !important;
  }
  li,
  li > .active,
  summary.active,
  a:hover,
  summary:hover {
    color: #feffff !important;
  }
  details > ul > li > a,
  details > ul > li > a:hover {
    color: black !important;
    cursor: pointer;
  }
`;

export default StyledHeader;
