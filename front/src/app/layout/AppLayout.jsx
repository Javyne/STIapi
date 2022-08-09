import styled from 'styled-components';
import { defaultTheme } from '../../themes';
import { Sidebar, Navbar, Actions } from '../components'

export const AppLayout = ({children}) => {

  return (
      <AppContainer>
        <Sidebar />
        <Navbar />
        <Content>
          <Actions />
          {children}
        </Content>
      </AppContainer>
  )
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
      "nav-bar nav-bar"
      "sidebar main";
  grid-template-rows: 50px auto;
  grid-template-columns: 300px auto;
  min-height: 100%;
  overflow: hidden;
  background-color: ${defaultTheme.palette.main.main};
  transition: all 0.5s ease;

  @media all and (max-width: 768px) { 
    grid-template-columns: 65px auto;
    
  }

`

const Content = styled.div`

  grid-area: main;
`

