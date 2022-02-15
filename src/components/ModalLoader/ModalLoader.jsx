import Loader from 'react-loader-spinner';
import { useRef } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { createPortal } from 'react-dom';
import s from './ModalLoader.module.css';
import PropTypes from 'prop-types';



const ModalLoader = ({ color = '#3766e6' }) => {
  const loaderRef = useRef(document.querySelector('#loader'));

  const loader = (
    <div className={s.loader}>
      <Loader type="Triangle" color={color} height={100} width={100} timeout={0} />
    </div>
  );

  return createPortal(loader, loaderRef.current);
};

ModalLoader.propTypes = {
  color: PropTypes.string,
};

export default ModalLoader;
