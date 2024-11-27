import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Services = styled.section`
  position: relative;

  ${mediaMaxWidth("mobile")`
    padding-bottom: 4rem;
  `}

  &:before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: calc(100% - (16.3rem * 2));
    height: 0.1rem;
    background: ${({ theme }) => theme.black015};

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: calc(100% - (4rem * 2));
    `}

    ${mediaMaxWidth("mobile")`
      width: calc(100% - (2.2rem * 2))
    `}
  }
`;

export const Wrapper = styled(_Wrapper)`
  overflow: hidden;
  padding-top: 0rem;
  flex-direction: column;
  gap: 7.8rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
    padding-top: 4rem;
  `}
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
  `}

  svg {
    width: 3.6rem;
    height: 2rem;
  }
`;

export const Span = styled.span`
  font-weight: 200;
  font-size: 3.2rem;
  line-height: 8.7rem;

  ${mediaMaxWidth("mobile")`
    line-height: 4rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`;

export const Card = styled.div`
  position: relative;
  width: 42.2rem;
  height: 48rem;
  border-radius: 1.2rem;
  display: flex;
  align-items: flex-end;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: #075d66;
    opacity: 0.7;
    border-radius: 1.2rem;
    z-index: 2;
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Bg = styled(LazyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 3.2rem 6rem;
  gap: 4.6rem;
  z-index: 3;

  ${mediaMaxWidth("mobile")`
    gap: 2rem;
  `}
`;

export const Title = styled.h2`
  color: white;
  font-size: 3.2rem;
  line-height: 8.7rem;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 2.2rem;
  line-height: 3.4rem;
  font-weight: 300;
`;

export const Link = styled.a`
  color: #2d7178;
  font-size: 1.8rem;
  line-height: 3.1rem;
  font-weight: 300;
  background: white;
  padding: 1rem 8rem;
  border-radius: 4rem;
`;
