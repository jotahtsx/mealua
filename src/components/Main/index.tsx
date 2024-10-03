import * as S from './styles'

const Main = ({
  title = 'Mealua',
  description = 'Somos a plataforma ideal para descobrir, jogar e compartilhar jogos com amigos.'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
