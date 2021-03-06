import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: saturate(180%) blur(20px);
`;

export const Container = styled.header`
  padding: 5px 8px 4px;
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 4;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  a {
    padding: 8px 28px;
    border-radius: 4px;
    width: 100%;
    text-align: center;
    margin: 0 1px;
  }
  justify-content: space-around;

  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InnerGrid = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  justify-self: center;
  max-width: 968px;
  position: relative;
  grid-template-columns: repeat(6, max-content);
  z-index: 3;
`;

export const MobileContainer = styled.header`
  padding: 5px 8px 4px;
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 4;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  a {
    padding: 8px 28px;
    border-radius: 4px;
    width: 100%;
    text-align: center;
    margin: 0 1px;
  }

  font-size: 16px;
  justify-content: center;
  align-items: ${(props) => (props.expanded ? "flex-start" : "center")};
  flex-direction: ${(props) => (props.expanded ? "column" : "row")};
  padding-bottom: ${(props) => (props.expanded ? "16px" : "4px")};

  a {
    text-align: left;
    padding: 12px;
  }

  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const CloseButton = styled.div`
  position: relative;
  display: ${(props) => (props.visible ? "block" : "none")};
  font-size: 26px;
  font-weight: 300;
  cursor: pointer;
  z-index: 3;
  position: relative;
`;
