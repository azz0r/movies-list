import styled from "styled-components";

const BaseHeader = styled.span`
  line-height: 1.2;
`;

export const H1 = BaseHeader.withComponent("h1").extend`
  font-size: x-large;
`;

export const H2 = BaseHeader.withComponent("h1").extend`
  font-size: large;
`;

export const Paragraph = styled.p`
  font-size: medium;
`;
