import * as S from "./styles";

export default () => {
  return (
    <S.Services id="dienstleistungen">
      <S.Wrapper>
        <S.Text>
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

          <S.Span>Wir bieten professionelle Lösungen für jedes Projekt, ob gross oder klein</S.Span>
        </S.Text>
        <S.Container>
          <S.Card>
            <S.Bg src="/imgs/home/services/cards/img1.jpeg" alt="Malerarbeiten" />
            <S.Content>
              <S.Title>Malerarbeiten</S.Title>
              <S.Description>
                Farbgestaltung, die wirkt. Von Wohnräumen bis zu Fassaden – wir schaffen
                beeindruckende Oberflächen, die lange halten.
              </S.Description>
              <S.Link href="/#kontakt">kontakt</S.Link>
            </S.Content>
          </S.Card>
          <S.Card>
            <S.Bg src="/imgs/home/services/cards/img1.jpeg" alt="Malerarbeiten" />
            <S.Content>
              <S.Title>Reinigungsarbeiten</S.Title>
              <S.Description>
                Sauberkeit ohne Kompromisse. Vertrauen Sie auf uns für Bauendreinigungen und
                regelmässige Reinigungsdienste.
              </S.Description>
              <S.Link href="/#kontakt" title="Kontaktieren Sie uns">
                kontakt
              </S.Link>
            </S.Content>
          </S.Card>
          <S.Card>
            <S.Bg src="/imgs/home/services/cards/img1.jpeg" alt="Malerarbeiten" />
            <S.Content>
              <S.Title>Transport</S.Title>
              <S.Description>
                Ihr Partner für den sicheren und pünktlichen Transport Ihrer Güter.
              </S.Description>
              <S.Link href="/#kontakt" title="Kontaktieren Sie uns">
                kontakt
              </S.Link>
            </S.Content>
          </S.Card>
        </S.Container>
      </S.Wrapper>
    </S.Services>
  );
};
