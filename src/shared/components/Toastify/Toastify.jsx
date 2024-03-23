import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastContainerProps } from './toastContainerProps';

const Toastify = () => {
  return <ToastContainer {...toastContainerProps} />;
};

export default Toastify;
