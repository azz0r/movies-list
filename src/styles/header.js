import styled from "styled-components";

const BaseHeader = styled.span`
  line-height: 1.2;
`;

export const H1 = BaseHeader.withComponent("h1").extend`
  font-size: ${props => props.theme.fontSizes.large};
`;

export const H2 = BaseHeader.withComponent("h1").extend`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
`;
