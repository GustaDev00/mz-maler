import * as S from "./styles";
import C from "@/constants";

export default () => {
  return (
    <S.WhyChooseUs>
      <S.Wrapper>
        <S.Content>
          <S.Title>{C.whyChooseUs.title}</S.Title>
          <S.Subtitle>{C.whyChooseUs.description}</S.Subtitle>
        </S.Content>
        <S.CallToAction $bg={C.whyChooseUs.callAction.img.src} />
      </S.Wrapper>
    </S.WhyChooseUs>
  );
};
