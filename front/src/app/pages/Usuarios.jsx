import { useEffect } from 'react';
import { useUsersStore } from '../../hooks';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataTableSTI } from '../components';


export const Usuarios = () => {

  //*COLUMNAS
  const columns = [
    {
      name: "ID",
      selector: row => row.user_id,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: "Administrador",
      cell: row => row.admin ? <CheckIcon color='success' /> : <CloseIcon color="error" />,
    },
    {
      name: "Tecnico",
      cell: row => row.tecnico ? <CheckIcon color='success' /> : <CloseIcon color="error" />,
    },
    {
      name: "Activo",
      cell: row => row.activo ? <CheckIcon color='success' /> : <CloseIcon color="error" />,
    },
    {
      name: "Editar",
      cell: row => <Button ><EditIcon color="info" /></Button>,
    },
    {
      name: "Eliminar",
      cell: row => <Button ><DeleteIcon color="error" /></Button>,
    },

  ]


  //*DATA DE USUARIOS
  const { startLoadingUsers, users} = useUsersStore();

  useEffect(() => {
    startLoadingUsers()
  }, [])

  return (
    <DataTableSTI 
      title = 'Usuarios'
      data={users}
      columns={columns}
    />
  )
}

