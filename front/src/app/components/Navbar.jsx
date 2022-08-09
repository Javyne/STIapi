import styled from 'styled-components';
import { defaultTheme } from '../../themes'
import {BsBoxArrowRight} from "react-icons/bs";
import logo from '../../images/logo.png';
import { useAuthStore } from '../../hooks/useAuthStore';

export const Navbar = () => {

  const {startLogout, user  } = useAuthStore()


  return (
    <Nav>
      <Brand>
        <Logo src={logo}/>
        <h3>&nbsp; Servicio Tecnico Integral</h3>
      </Brand>
      <h3>{user.nombre}</h3>
      <Button onClick={startLogout}>
        SALIR &nbsp;
        <BsBoxArrowRight/>
      </Button>

    </Nav>
  )
}

const Nav = styled.nav`
  grid-area: nav-bar;
  background-color: ${defaultTheme.palette.oscuro.main};
  display:flex;
  position: sticky;
  color:${defaultTheme.palette.claro.main};
  font-weight: 700;
  justify-content: space-between;
  align-items: center; 
`

const Logo = styled.img`
  height: 40px;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  transition: all 0.5s ease;

  @media all and (max-width: 768px) { 
    font-size: 0px;
  }
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${defaultTheme.palette.claro.main};
  background-color: rgba(0,0,0,0);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 700;
  padding: 6px 12px;
  
`