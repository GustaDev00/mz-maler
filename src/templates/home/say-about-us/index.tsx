import React, { useEffect, useState } from "react";
import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { ResponsiveElement } from "@/utils/responsive-element";

export default () => {
  const { isInView, ref } = useAnimation();
  const { span, list } = C.sayAboutUs;
  const [pos, setPos] = useState(2);
  const [start, setStart] = useState(false);

  const handleArrow = (direction: "left" | "right") => {
    setStart(false);

    if (direction === "left") {
      setPos((prev) => (prev - 1 + list.length) % list.length);
    } else {
      setPos((prev) => (prev + 1) % list.length);
    }

    setTimeout(() => {
      setStart(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setPos((prev) => (prev + 1) % list.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [pos]);

  useEffect(() => {
    if (isInView && !start) {
      setStart(true);
    }
  }, [isInView, start]);

  return (
    <S.AboutUs ref={ref}>
      <S.Wrapper>
        <S.TextSpan>
          <svg
            width="37"
            height="16"
            viewBox="0 0 37 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.7071 8.70711C37.0976 8.31658 37.0976 7.68342 36.7071 7.29289L30.3431 0.928932C29.9526 0.538408 29.3195 0.538408 28.9289 0.928932C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM36 7L0 7V9L36 9V7Z"
              fill="black"
              fill-opacity="0.59"
            />
          </svg>

          <S.Span>Unsere Dienstleistungen</S.Span>
        </S.TextSpan>
        <S.Slide>
          <S.Progress duration={8} color="white" isActive={start} />
          <S.Content>
            {list.map((item, i) => (
              <S.Article key={i} $active={i === pos}>
                <S.Text>{item}</S.Text>
              </S.Article>
            ))}
            <S.Arrows>
              <S.ArrowLeft onClick={() => handleArrow("right")}>
                <S.Icon />
              </S.ArrowLeft>
              <S.ArrowRight onClick={() => handleArrow("right")}>
                <S.Icon />
              </S.ArrowRight>
            </S.Arrows>
          </S.Content>
        </S.Slide>
      </S.Wrapper>
    </S.AboutUs>
  );
};
