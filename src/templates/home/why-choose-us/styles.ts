import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { Crown } from "@/components/svgs/crown";
import { SubtitleLightSmall, TextListItem } from "@/styles/components/subtitle";
import { TitleBig, TitleListItem, TitleWhiteSmall } from "@/styles/components/titles";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const WhyChooseUs = styled.section``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    margin-top: 4rem;
    margin-bottom: 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 4rem;
  `}
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 5.6rem;
  font-weight: 300;
  line-height: 8.6rem;
  letter-spacing: -0.2rem;
  font-family: var(--manrope);

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 4rem;
    line-height: 6rem;
  `}
`;

export const Subtitle = styled.p`
  width: 100%;
  font-family: var(--manrope);
  font-size: 2.6rem;
  line-height: 5.3rem;
  letter-spacing: -0.1rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 2rem;
    line-height: 3.6rem;
  `}
`;

export const List = styled.ul`
  margin: 5.2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.2rem 2.4rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    grid-template-columns: 1fr;
  `}

  ${mediaMaxWidth("mobile")`

  `}
`;

export const Item = styled.li<{ $bg: string }>`
  position: relative;
  background: ${({ theme }) => theme.chineseBlack};
  border-radius: 1.2rem;
  padding: 4.8rem;
  transition: background 1s ease;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: ${({ $bg }) => `url(${$bg}) no-repeat`};
    background-size: cover;
    z-index: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;
  }

  &:hover {
    &::before {
      opacity: 0.5;
      visibility: visible;
    }
  }

  ${mediaMaxWidth("mobile")`
    padding: 4.8rem 2.2rem;
  `}
`;

export const WrapperItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  z-index: 2;
`;

export const Icon = styled(Crown)`
  width: 3.6rem;
  height: 3.6rem;
`;

export const TitleItem = styled.h3`
  ${TitleListItem}
`;

export const TextItem = styled.p`
  ${TextListItem}
`;

export const CallToAction = styled.div<{ $bg: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 41.4rem;
  background: url(${({ $bg }) => $bg}) no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1.2rem;
`;

export const Text = styled.p`
  ${TitleWhiteSmall}

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    align-self: flex-start;
  `}
`;

export const Button = styled(ButtonSwipe)`
  ${mediaMaxWidth("mobile")`
    position: relative;
    font-size: 2rem;
    padding: 1.5rem 3rem;
  `}
`;
