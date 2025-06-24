import styled from "@emotion/styled";

type PropsType = {
  $clr?: string;
};

export const TxtStyled = styled.div<PropsType>`
  span {
    color: ${({ $clr }) => `var(--${$clr ?? "whitesmoke"})`};
  }
`;
