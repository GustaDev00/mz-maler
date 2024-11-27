import * as S from "./styles";
import C from "@/constants";

export const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Line01>
          <S.Logo />

          <S.List>
            <S.ListItem>
              <S.Link href={C.phone.link}>
                <S.Icon>
                  <S.Phone />
                </S.Icon>
                <S.TextList>
                  {C.phone.text}
                  <br />
                  <span>{C.phone.number}</span>
                </S.TextList>
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href={C.mail.link}>
                <S.Icon>
                  <S.Mail />
                </S.Icon>
                <S.TextList>
                  {C.mail.text}
                  <br />
                  <span>{C.mail.email}</span>
                </S.TextList>
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href={C.location.link}>
                <S.Icon>
                  <S.Pin />
                </S.Icon>
                <S.TextList>
                  {C.location.text}
                  <br />
                  <span>{C.location.address}</span>
                </S.TextList>
              </S.Link>
            </S.ListItem>
          </S.List>
        </S.Line01>

        <S.Info>
          <S.Copy>{C.footer.copyrigth.text}</S.Copy>
          <S.Agency>{C.footer.copyrigth.fiber}</S.Agency>
        </S.Info>
      </S.Wrapper>
    </S.Footer>
  );
};
