import type React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const autoClose = 4000;

export const ToastProvider = (): React.ReactElement => {
   return <ToastContainer position="top-right" autoClose={autoClose} newestOnTop closeOnClick theme="colored" />;
};

export type IToastAlertStatus = 'success' | 'error' | 'info' | 'default';

export function ToastAlert(status: IToastAlertStatus, message: string): void {
   switch (status) {
      case 'success':
         toast.success(message);
         break;
      case 'error':
         toast.error(message);
         break;
      case 'info':
         toast.info(message);
         break;
      case 'default':
         toast(message);
         break;
      default:
         toast(message);
   }
}
