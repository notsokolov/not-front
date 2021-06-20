import styled, { css } from "styled-components";

export const Label = styled.span.attrs(({ isActive }) => ({
  className: `nav-label ${isActive && "active"}`,
}))`
  display: flex;
  flex: 1;
  z-index: 3;
  position: relative;

  a {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;

    a {
      text-align: left;
    }
  }
`;
