import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('deve renderizar o título.', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // busca o elemento e verifica a existência dele
    expect(screen.getByRole('heading', { name: /mealua/i })).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve renderizar as cores corretamente.', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
