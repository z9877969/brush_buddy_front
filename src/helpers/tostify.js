import { toast } from 'react-toastify';

export const toastify = {
  success: (message, props) =>
    toast.success(message, {
      style: {
        background: '#6d2935',
      },
      ...props,
    }),
  warning: (message, props = {}) =>
    toast.warn(message, {
      style: {
        background: 'orange',
      },
      ...props,
    }),
  error: (message, props = {}) =>
    toast.error(message, {
      style: {
        background: 'red',
      },
      ...props,
    }),
};
