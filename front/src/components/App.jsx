import '../styles/App.css';
import styled from 'styled-components';
import { defaultTheme } from '../themes'
import { Sidebar, Navbar, Actions } from './layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Clientes, Config, Home, Reparaciones, Usuarios } from './pages'

export const App = () => {

  return (
    <BrowserRouter>
      <AppContainer>
        <Sidebar />
        <Navbar />
        <Content>
          <Actions />
          <Routes>
            <Route exact path="/clientes" element={<Clientes />} />
            <Route exact path="/config" element={<Config />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/reparaciones" element={<Reparaciones />} />
            <Route exact path="/usuarios" element={<Usuarios />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Content>
      </AppContainer>
    </BrowserRouter>
  )
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
      "sidebar nav-bar"
      "sidebar main";
  grid-template-rows: 50px auto;
  grid-template-columns: 300px auto;
`

const Content = styled.div`
  background: ${defaultTheme.fondoClaro};
  grid-area: main;
`

