import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes.large};
  font-family: ${props => props.theme.palette.main.bg};
  color: ${props => props.theme.palette.main.color};
  background-color: ${props => props.theme.palette.main.bg};
  padding: ${props => props.theme.spacings.small};
`;
