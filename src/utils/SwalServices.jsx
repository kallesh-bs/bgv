import Swal from 'sweetalert2';

const swalService = {
  showAlert: ({title, text, icon = 'info'}) => {
    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'OK',
    });
  },

  showConfirmation: ({title, text}) => {
    return Swal.fire({
      title,
      text,
      icon: 'question',
    });
  },

  showSuccess: ({
    title,
    text,
    showConfirmButton = true,
    confirmButtonText = 'ok',
    cancelButtonText = 'cancel',
    timer = '1500',
  }) => {
    return Swal.fire({
      title,
      text,
      icon: 'success',
      showConfirmButton: showConfirmButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      timer: timer,
    });
  },

  showError: ({title, text}) => {
    return Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  },

  showWarning: ({
    title,
    text,
    showCancelButton = false,
    confirmButtonText = 'ok',
    cancelButtonText = 'cancel',
  }) => {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: showCancelButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  },
};

export default swalService;
