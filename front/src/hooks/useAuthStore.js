import { useSelector, useDispatch } from 'react-redux'
import { stiApi } from '../api';
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store'

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async ({ userName, password }) => {

        dispatch(onChecking());

        try {
            const { data } = await stiApi.post('/auth', { user_name: userName, pass: password })
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-inite-date', new Date().getTime());
            dispatch(onLogin({ nombre: data.nombre, uid: data.uid }))
        } catch (error) {
            dispatch(onLogout('Usuario o Contraseña incorrectos'));
            clearErrorMessage();
        }
    }


    const checkToken = async()=>{
        const token = localStorage.getItem('token');

        if(!token) return dispatch(onLogout());

        try {
            const {data} = await stiApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-inite-date', new Date().getTime());
            dispatch(onLogin({ nombre: data.nombre, uid: data.uid }))
        }catch(error){
            startLogout();
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }



    return {
        //* Propiedades
        status,
        user,
        errorMessage,

        //* Metodos
        checkToken,
        startLogin,
        startLogout,

    }
}