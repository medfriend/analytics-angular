declare module 'toastify-js' {
    interface ToastifyOptions {
      text: string;
      duration?: number;
      close?: boolean;
      gravity?: 'top' | 'bottom';
      position?: 'left' | 'center' | 'right';
      backgroundColor?: string;
      stopOnFocus?: boolean;
      onClick?: () => void;
    }
  
    interface Toastify {
      options: ToastifyOptions;
      showToast: () => void;
    }
  
    function Toastify(options: ToastifyOptions): Toastify;
  
    export default Toastify;
  }
  