import styled from 'styled-components';
import { defaultTheme } from '../../themes'
import { NavLink } from 'react-router-dom';
import {BsFillPersonBadgeFill, BsTools, BsClipboardData, BsFillPeopleFill, BsGear} from "react-icons/bs";
import logo from '../../images/logo.png';


export const Sidebar = () => {
  return (
    <Side>
      <Header>
        <Logo src={logo}/>
        <h3>&nbsp; Servicio Tecnico Integral</h3>
      </Header>
      <Content>
          <SideLink to='/clientes'><BsFillPeopleFill/> &nbsp; Clientes</SideLink>
          <SideLink to='/reparaciones'><BsTools/> &nbsp;Reparaciones</SideLink>
          <SideLink to='/stock'><BsClipboardData/> &nbsp;Stock</SideLink>
          <SideLink to='/usuarios'><BsFillPersonBadgeFill/> &nbsp;Usuarios</SideLink>
          <SideLink to='/config'><BsGear/> &nbsp;Configuraciones</SideLink>
      </Content>
      <Footer>
        <p>Created by Javier Russo &copy;2022 </p>
      </Footer>

    </Side>
  )
}

const Side = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  background-color: ${defaultTheme.claro};
  box-shadow: 4px 0px 2px -2px gray;
`
const Header = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  text-weight: 700;
  background-color: ${defaultTheme.mainClaro}

`
const Logo = styled.img`
  width: 40px; 
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SideLink = styled(NavLink)` 
  width: 80%;
  display: flex;
  margin-top: 20px;
  padding-left: 20px;
  height: 50px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  color: ${defaultTheme.oscuro};
  align-items: center;


  &:hover {
    background-color: ${defaultTheme.main20};
    font-weight: 700;
  }

  &.active{
    background-color: ${defaultTheme.main};
    color: ${defaultTheme.claro};
    box-shadow: 0 4px 2px -2px gray;
    font-weight: 700;
  }
`

const Footer = styled.div`
  display: flex;
  height: 50px;
  bottom: 0px;
  color: grey;
  justify-content: center; 
`
