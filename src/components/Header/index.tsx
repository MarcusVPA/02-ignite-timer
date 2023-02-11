import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/02-ignite-timer" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/02-ignite-timer/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
