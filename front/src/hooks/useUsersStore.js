import { useSelector, useDispatch } from 'react-redux'
import { stiApi } from '../api';
import { onLoadingUsers, onError, clearErrorMessage, onLoadUsers } from '../store'

export const useUsersStore = () => {

    const { users, activeUser } = useSelector(state => state.users)
    const dispatch = useDispatch();

    const startLoadingUsers= async () => {

        dispatch(onLoadingUsers());

        try {
            const { data } = await stiApi.get('/usuarios')
            dispatch(onLoadUsers(data));
        } catch (error) {
            dispatch(onError(error));
            clearErrorMessage();
        }
    }

    return {
        //* Propiedades
        users,

        //* Metodos
        startLoadingUsers

    }
}