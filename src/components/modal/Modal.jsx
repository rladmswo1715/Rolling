import React from "react";

const Modal = ({ cardData, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <div className="modal_content__header__profile-image">
            <img src={cardData.profileImageURL} />
          </div>
          <div className="modal__content__header__message-from">
            <p>From. {cardData.sender}</p> <br />
            <div className="modal__content__header__message-from__relationship">
              {cardData.relationship === "지인" ? (
                <span class="badge__orange">지인</span>
              ) : cardData.relationship === "동료" ? (
                <span class="badge__purple">동료</span>
              ) : cardData.relationship === "가족" ? (
                <span class="badge__green">가족</span>
              ) : cardData.relationship === "친구" ? (
                <span class="badge__blue">친구</span>
              ) : (
                <p>Unknown Sender</p>
              )}
            </div>
          </div>
          <div className="modal__content__header__message-created">
            {" "}
            {cardData.createdAt}
          </div>
        </div>
        <div>제목과 본문 분리선</div>

        <div className="modal__content__body">{cardData.content}</div>
        <span onClick={onClose}>확인</span>
      </div>
    </div>
  );
};

export default Modal;
