import styled from 'styled-components';
import { defaultTheme } from '../../themes'
import { NavLink } from 'react-router-dom';
import {BsFillPersonBadgeFill, BsTools, BsClipboardData, BsFillPeopleFill, BsGear} from "react-icons/bs";
import {BiHomeAlt} from "react-icons/bi";



export const Sidebar = () => {
  return (
    <Side>
      <Content>
          <SideLink to='/home'><BiHomeAlt/>Dashboard</SideLink>
          <SideLink to='/clientes'><BsFillPeopleFill/>Clientes</SideLink>
          <SideLink to='/reparaciones'><BsTools/>Reparaciones</SideLink>
          <SideLink to='/stock'><BsClipboardData/>Stock</SideLink>
          <SideLink to='/usuarios'><BsFillPersonBadgeFill/>Usuarios</SideLink>
          <SideLink to='/config'><BsGear/>Configuraciones</SideLink>
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
  background-color: ${defaultTheme.palette.oscuro.main};
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
  color: ${defaultTheme.palette.claro.main};
  align-items: center;
  gap: 20px;
  transition: all 0.5s ease;
  
  svg{
    font-size: 24px;
  }

  &:hover {
    background-color: ${defaultTheme.palette.main.main};
    font-weight: 700;
  }

  &.active{
    background-color: ${defaultTheme.palette.main.main};
    color: ${defaultTheme.palette.claro.main};
    border-left: 10px solid ${defaultTheme.palette.active.main};
    font-weight: 700;
  }

  @media all and (max-width: 768px) { 
    font-size: 0px;
    width: 100%;
    justify-content: center;

    &.active{
      background-color: ${defaultTheme.palette.main.main};
      color: ${defaultTheme.palette.claro.main};
      border-left: none;
    }

    svg{
      font-size: 26px;
    }
  }


`

const Footer = styled.div`
  display: flex;
  height: 50px;
  bottom: 0px;
  color: grey;
  justify-content: center; 
  transition: all 0.5s ease;

  @media all and (max-width: 768px) { 
    font-size: 0px;
  }

`
