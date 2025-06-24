import styled from "@emotion/styled";

type PropsType = {
  $clr: string;
};

export const HeaderLinkStyled = styled.div<PropsType>`
  color: ${({ $clr }) => `var(--${$clr})`};
`;
