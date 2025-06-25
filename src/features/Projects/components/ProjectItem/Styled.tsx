import styled from "@emotion/styled";

export const ProjectItemStyled = styled.div`
  perspective: 9999px;

  .flipper {
    transform-style: preserve-3d;
    will-change: transform;
    position: relative;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
  }

  .client,
  .server {
    position: absolute;
    inset: 0;
  }
  .client {
    z-index: 100;
    transform: rotateY(0deg);
    backface-visibility: hidden;
  }
  .server {
    z-index: 50;
    transform: rotateY(180deg);
    /* background: var(--whitesmoke); */
    background: var(--neutral__950);
    color: var(--gray__300);
  }
`;
