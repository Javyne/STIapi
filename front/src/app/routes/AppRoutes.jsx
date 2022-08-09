import '../../styles/App.css';
import { AppLayout } from '../layout'
import { Routes, Route } from 'react-router-dom';
import { Clientes, Config, Home, Reparaciones, Usuarios, Stock } from '../pages'

export const AppRoutes = () => {

  return (
    <AppLayout>
      <Routes>
        <Route exact path="/stock" element={<Stock />} />
        <Route exact path="/clientes" element={<Clientes />} />
        <Route exact path="/config" element={<Config />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/reparaciones" element={<Reparaciones />} />
        <Route exact path="/usuarios" element={<Usuarios />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </AppLayout>
  )
}

