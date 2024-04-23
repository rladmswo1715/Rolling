import './toast.scss';
import { useState } from 'react';
import cancelicon from '/assets/icon/icon_cancel.svg';
import toasticon from '/assets/icon/icon_toast.svg';
import './toast.scss';

export default function Toast({ isToastShow, toastContent, handleToastClose }) {
  const [showToast, setShowToast] = useState(true);

  function handleClose() {
    setShowToast(false);
  }

  return (
    <>
      {isToastShow && (
        <div className="toast--msg">
          <div className="toast--msg__container">
            <div className="toast--msg__container-body">
              <img src={toasticon} alt="toasticon" />
              <p className="toast--msg__container-body__text">{toastContent}</p>
            </div>
            <button
              className="toast--msg__container-button"
              onClick={handleToastClose}
            >
              <img src={cancelicon} alt="cancelicon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
