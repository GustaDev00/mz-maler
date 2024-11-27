import { mediaMaxWidth } from "@/utils/media-query";
import Link from "next/link";
import styled, { css } from "styled-components";

const swipeStyles = css`
  width: fit-content;
  cursor: pointer;
  padding: 1.75rem 7rem;
  color: ${({ theme }) => theme.white};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.1rem;
  letter-spacing: -0.0002rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.alabamaCrimson};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0rem 1.2rem 1.6rem 0rem ${({ theme }) => theme.black01};
  }

  ${mediaMaxWidth("mobile")`
    padding: 1.7rem 4rem;
  `}
`;

export const ButtonSwipe = styled.button`
  ${swipeStyles}
`;

export const LinkSwipe = styled(Link)`
  ${swipeStyles}
`;
