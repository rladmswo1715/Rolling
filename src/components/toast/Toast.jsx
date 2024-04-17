import cancelicon from '/assets/icon/icon_cancel.svg';
import toasticon from '/assets/icon/icon_toast.svg';
import './toast.scss';
import { useState } from 'react';

function Toast() {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <>
      {showToast && (
        <div className="toast--msg">
          <div className="toast--msg__container">
            <div className="toast--msg__container-body">
              <img src={toasticon} alt="toasticon" />
              <p className="toast--msg__container-body__text">
                URL이 복사 되었습니다.
              </p>
            </div>
            <button
              className="toast--msg__container-button"
              onClick={handleClose}
            >
              <img src={cancelicon} alt="cancelicon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Toast;
