import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const LocalVideo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Video = styled.video`
  ${mediaMaxWidth("mobile")`
    object-position: 30%;
  `}
`;

export const FallbackImage = styled.div``;

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #001e21;
  opacity: 0.7;
  z-index: 1;
`;
