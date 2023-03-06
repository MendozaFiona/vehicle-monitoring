import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #17252a;
  border-bottom: 1px solid #2b7a78;
`;

export const StyledNav = styled.nav`
  padding: 10px 130px 10px 130px;
  a {
    color: #3aafa9;
  }
  li,
  li > .active {
    color: #feffff;
  }
`;

export default StyledHeader;
