import styled from 'styled-components';
import { defaultTheme } from '../../themes'
import {BsBoxArrowRight} from "react-icons/bs";

export const Navbar = () => {
  return (
    <Nav>

      <Button>
        SALIR &nbsp;
        <BsBoxArrowRight/>
      </Button>

      



    </Nav>
  )
}

const Nav = styled.nav`
  grid-area: nav-bar;
  background-color: ${defaultTheme.mainClaro};
  display:flex;
  position: sticky;
  box-shadow: 0 4px 2px -2px gray;
  color:${defaultTheme.oscuro};
  font-weight: 700;
  justify-content: flex-end;
  align-items: center; 
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${defaultTheme.claro};
  background-color: ${defaultTheme.main};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 700;
  padding: 6px 12px;

  &:hover{
    box-shadow: 0 4px 2px -2px gray;
  }
 
  
`