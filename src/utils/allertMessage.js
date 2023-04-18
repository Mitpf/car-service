import Swal from 'sweetalert2';

export const allertError = (message) => {

    return Swal.fire({
        icon: 'error',
        title: 'ERROR / WARNING !',
        text: `${message}`,
        color: '#d33',
        confirmButtonColor: '#d33'
    })
}