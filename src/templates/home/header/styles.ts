import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { TitleWhite } from "@/styles/components/titles";
import { Slider as _Slider } from "@/components/molecules/slider";
import { mediaMaxWidth } from "@/utils/media-query";
import { SubtitleLight } from "@/styles/components/subtitle";
import { HiCheckCircle } from "react-icons/hi";

export const Header = styled.section`
  position: relative;
  margin-top: 10rem;
`;

export const Wrapper = styled(_Wrapper)`
  height: 100%;
  padding-bottom: 25rem;
  padding-top: 20rem;
  align-items: center;
  gap: 4rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    gap: 10rem;
    padding-top: 24rem;
  `}

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
    padding-top: 8rem;
    padding-bottom: 6rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  &::before {
    position: absolute;
    top: -10%;
    right: 15%;
    content: "";
    width: 0.1rem;
    height: 120%;
    background: white;
    opacity: 0.35;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      display: none;
    `}
  }
`;

export const Container = styled.div`
  position: relative;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    align-self: end;
  `}

  ${mediaMaxWidth("mobile")`
    align-self: center;

    picture {
      width: 100%;
    }
  `}
`;

export const Image = styled(LazyImage)`
  width: 52.3rem;
  height: 35.8rem;
  object-fit: cover;
  border: 0.3rem solid white;
  border-radius: 0.8rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 24.4rem;
  `}
`;

export const Tag = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2.7rem;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 6.4rem;
  border-radius: 4.2rem;
`;

export const Text = styled.p``;

export const Icon = styled(HiCheckCircle)`
  width: 2rem;
  height: 2rem;
  fill: #2d7178;
`;

export const Title = styled.h1`
  ${TitleWhite}
`;

export const Subtitle = styled.p`
  ${SubtitleLight}
`;

export const Button = styled(ButtonSwipe)``;

export const Slider = styled(_Slider)``;
