import C from "@/constants";
import * as S from "./styles";

export default () => {
  return (
    <S.AboutUs>
      <S.Wrapper>
        <S.Container>
          <S.ImgBig {...C.aboutUs.imgs[0]} />
        </S.Container>
        <S.Content>
          <S.Title>{C.aboutUs.title}</S.Title>
          <S.Button {...C.aboutUs.button}>{C.aboutUs.button.title}</S.Button>
          <S.List>
            {C.aboutUs.list.map(({ text }, index) => (
              <S.ListItem key={index}>
                <S.Icon>
                  <S.Check />
                </S.Icon>
                {text}
              </S.ListItem>
            ))}
          </S.List>
        </S.Content>
      </S.Wrapper>
    </S.AboutUs>
  );
};
