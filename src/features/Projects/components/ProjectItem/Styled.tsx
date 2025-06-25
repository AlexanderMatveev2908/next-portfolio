import styled from "@emotion/styled";

export const ProjectItemStyled = styled.div`
  perspective: 9999px;

  .flipper {
    transform-style: preserve-3d;
    will-change: transform;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .client,
  .server {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
  }
  .client {
    z-index: 50;
  }
  .server {
    z-index: 100;
    background: var(--neutral__950);
    transform: rotateY(180deg);
    color: var(--gray__300);
  }
`;
