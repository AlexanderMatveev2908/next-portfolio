import styled from "@emotion/styled";

export const ProjectItemStyled = styled.div`
  perspective: 9999px;

  transition: 0.4s box-shadow;
  &:hover {
    box-shadow: 0 0 10px var(--whitesmoke), 0 0 20px var(--whitesmoke),
      0 0 30px var(--whitesmoke);
  }

  .flipper {
    transform-style: preserve-3d;
    will-change: transform;
    position: relative;
    min-width: 100%;
    min-height: 100%;
    /* overflow: hidden; */
  }

  .client,
  .server {
    position: absolute;
    inset: 0;
  }
  .client {
    transform: rotateY(0deg);
    backface-visibility: hidden;
    background: var(--neutral__950);
    /* z-index: 50; */
  }
  .server {
    transform: rotateY(180deg);
    backface-visibility: hidden;
    /* z-index: 100; */
    /* background: var(--whitesmoke); */
    background: var(--neutral__950);
    color: var(--gray__300);
  }
`;
