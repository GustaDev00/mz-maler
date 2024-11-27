import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import SimpleVideoBackground from "@/components/atoms/simple-video-background";

export default () => {
  const { sectionRef } = useAnimation();

  return (
    <S.Header ref={sectionRef}>
      <SimpleVideoBackground {...C.hero.bg} />
      <S.Wrapper>
        <S.Content>
          <S.Title>{C.hero.title}</S.Title>
          <S.Subtitle>{C.hero.description}</S.Subtitle>
          <S.Button {...C.hero.button} data-timeline="button">
            {C.hero.button.title}
          </S.Button>
        </S.Content>
        <S.Container>
          <S.Image {...C.hero.container.image} />
          <S.Tag>
            <S.Icon />
            <S.Text>{C.hero.container.text}</S.Text>
          </S.Tag>
        </S.Container>
      </S.Wrapper>
    </S.Header>
  );
};
