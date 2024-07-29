import Swal, { SweetAlertIcon } from "sweetalert2";

interface AlertOptions {
  title: string;
  text: string;
  icon?: SweetAlertIcon;
  confirmButtonText?: string;
}

interface ConfirmationOptions {
  title: string;
  text: string;
}

interface SuccessOptions extends AlertOptions {
  showConfirmButton?: boolean;
  cancelButtonText?: string;
  timer?: number; // Ensure timer is strictly a number
}

interface WarningOptions extends AlertOptions {
  showCancelButton?: boolean;
  cancelButtonText?: string;
}

const swalService = {
  showAlert: ({
    title,
    text,
    icon = "info",
    confirmButtonText = "OK",
  }: AlertOptions) => {
    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText,
    });
  },

  showConfirmation: ({ title, text }: ConfirmationOptions) => {
    return Swal.fire({
      title,
      text,
      icon: "question",
    });
  },

  showSuccess: ({
    title,
    text,
    showConfirmButton = true,
    confirmButtonText = "ok",
    cancelButtonText = "cancel",
    timer = 1500,
  }: SuccessOptions) => {
    return Swal.fire({
      title,
      text,
      icon: "success",
      showConfirmButton,
      confirmButtonText,
      cancelButtonText,
      timer, // Ensure timer is a number
    });
  },

  showError: ({ title, text }: AlertOptions) => {
    return Swal.fire({
      title,
      text,
      icon: "error",
      confirmButtonText: "OK",
    });
  },

  showWarning: ({
    title,
    text,
    showCancelButton = false,
    confirmButtonText = "ok",
    cancelButtonText = "cancel",
  }: WarningOptions) => {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton,
      confirmButtonText,
      cancelButtonText,
    });
  },
};

export default swalService;
