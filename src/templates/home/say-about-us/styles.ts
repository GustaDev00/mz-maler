import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Logo as _Logo } from "@/components/atoms/logo";
import { TextArrowAnimation } from "@/components/atoms/text-arrow-animation";
import { ProgressBar } from "@/components/atoms/progress-bar";
import { ArrowBlueIcon } from "@/components/svgs/arrow-down";

export const AboutUs = styled.section``;

export const Wrapper = styled(_Wrapper)`
  justify-content: space-between;
  align-items: flex-start;
  gap: 13.5rem;
  flex-direction: column;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
  flex-direction: column;
    gap: 8.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    gap: 0rem;
  `}
`;

export const TextSpan = styled.div`
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

export const Imagem = styled(LazyImage)`
  width: 97rem;
  height: 100%;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
  `}
`;

export const Slide = styled.div`
  top: 50%;
  transform: translateY(-30%);
  padding: 6.2rem 18rem;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #108e9b, #033a40);
    opacity: 0.6;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("/imgs/home/hero/tag.jpeg") no-repeat center;
    background-size: 200%;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 6.2rem 1.2rem;
    transform: translateY(-10%);
    width: calc(100% - 12rem);
  `}

  ${mediaMaxWidth("mobile")`
    margin-top: 10rem;
    width: 100%;
    position: relative;
  `}
`;

export const Progress = styled(ProgressBar)`
  position: absolute;
  top: 0.01rem;
  left: 0;
  z-index: 3;
  border-radius: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const Article = styled.article<{ $active: boolean }>`
  width: 100%;
  height: 25rem;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  transition: opacity 0.4s ease, visibility 0.4s ease;

  &:not(:first-child) {
    position: absolute;
    top: 0;
  }

  ${mediaMaxWidth("mobile")`
    height: 32rem;
  `}
`;

export const Text = styled.p`
  color: #fff;
  font-size: 3.4rem;
  font-weight: 400;
  line-height: 5.5rem;
  letter-spacing: -0.0003rem;

  strong {
    font-weight: 600;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 3rem;
    line-height: 4.5rem;
  `}

  ${mediaMaxWidth("mobile")`
    line-height: 4.2rem;
    letter-spacing: -0.0002rem;
    font-size: 2rem;
    white-space: normal;
  `}
`;

export const Arrows = styled.div`
  display: flex;
  justify-content: space-center;
  align-items: center;
  gap: 3rem;
`;

export const Icon = styled(ArrowBlueIcon)``;

const Arrow = styled.button`
  position: relative;
  width: 5rem;
  height: 5rem;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowLeft = styled(Arrow)`
  transform: rotate(-225deg);
`;

export const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
  top: 0.2rem;
`;
