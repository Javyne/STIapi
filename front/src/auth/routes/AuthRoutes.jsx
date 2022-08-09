import { Routes, Route } from 'react-router-dom';
import { Login, Restore } from '../pages';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/restore" element={<Restore />} />
            <Route path="/*" element={<Login />} />
        </Routes>
    )
}
