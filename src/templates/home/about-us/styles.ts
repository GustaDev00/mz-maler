import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { CheckConfirmed } from "@/components/svgs/check-confirmed";
import { SubtitleLight } from "@/styles/components/subtitle";
import { TitleBig } from "@/styles/components/titles";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUs = styled.section`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
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

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
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
  gap: 8.8rem;
  padding-top: 12rem;
  padding-bottom: 12rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    gap: 12rem;
  `}

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
    padding-top: 8rem;
  `}
`;

export const Container = styled.div`
  position: relative;
`;

export const ImgBig = styled(LazyImage)`
  width: 60rem;
  height: 100%;
  object-fit: cover;
  border: 0.6rem solid ${({ theme }) => theme.white};
  border-radius: 0.5rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: 68.2rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 57.6rem;
  `}
`;

export const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;

  ${mediaMaxWidth("mobile")`
    gap: 2.2rem;
  `}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 7.4rem;
  letter-spacing: -0.4rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.4rem;
    line-height: 5.1rem;
    letter-spacing: -0.22rem;

    br {
      display: none;
    }
  `}
`;

export const Subtitle = styled.p`
  ${SubtitleLight}

  color: ${({ theme }) => theme.eerieBlack};
`;

export const Button = styled(ButtonSwipe)`
  ${mediaMaxWidth("mobile")`
    margin: 2.4rem 0;
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  ${mediaMaxWidth("mobile")`
    gap: 3.2rem;
    margin-top: 4rem;
  `}
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;

  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column; 
    align-items: flex-start;
  `}
`;

export const Icon = styled.div`
  background: ${({ theme }) => theme.white};
  box-shadow: 0 0.4rem 1.6rem ${({ theme }) => theme.black008};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

export const Check = styled(CheckConfirmed)`
  path {
    fill: #2d7178;
  }
`;
