import * as S from "./styles";
import { ButtonSwipeProps } from "./props";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSwipe = ({ href, className, onClick, children, ...props }: ButtonSwipeProps) => {
  return href ? (
    <S.LinkSwipe className={className} {...(props as LinkProps)} href={href}>
      {children}
    </S.LinkSwipe>
  ) : (
    <S.ButtonSwipe className={className} {...(props as ButtonProps)}>
      {children}
    </S.ButtonSwipe>
  );
};
