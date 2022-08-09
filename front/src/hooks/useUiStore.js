import {useSelector , useDispatch} from 'react-redux'
import { onOpenModal, onCloseModal} from '../store';


export const useUiStore = () => { 

    const dispatch = useDispatch();

    const { isModalOpen} = useSelector(state => state.ui)

    const openModal = () => {
        dispatch(onOpenModal())
    }

    const closeModal = () => {
        dispatch(onCloseModal())
    }

    const toggleModal = () => {
        (isModalOpen)
            ? dispatch(onCloseModal())
            : dispatch(onOpenModal());
    }

    return{
        //* Propiedades
        isModalOpen,

        //* Metodos
        openModal,
        closeModal,
        toggleModal,
    }

}