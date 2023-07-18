import * as S from './styles'
const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components!'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor sentado em frente de  uma tela com códigos de programação"
    />
  </S.Wrapper>
)

export default Main