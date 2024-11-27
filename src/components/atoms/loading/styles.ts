import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Loading = styled.div<{ $isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.antiFlashWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

export const Container = styled.div`
  position: relative;
  border: 0.3rem solid ${({ theme }) => theme.rosewood};
  padding: 5rem;
  border-radius: 50%;

  height: 20rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 100%;
`;

export const ProgressMensage = styled.p`
  position: absolute;
  left: 50%;
  margin-top: 40rem;
  transform: translateX(-50%);
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;
