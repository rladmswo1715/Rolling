import './modal.scss';
import React, { useState } from 'react';
import { formatDate } from '../../utills/time';

function Modal({ cardData, isModalOpen }) {
  const [modalOpen, setModalOpen] = useState(true); // 모달 상태를 관리하는 useState 훅 사용

  function closeModal() {
    isModalOpen(false);
    setModalOpen(false);
  }
  const formatedDate = formatDate(cardData.createdAt);
  // if (isModalOpen) setModalOpen(true);
  return (
    // 모달이 열려있는 상태일 때만 렌더링
    modalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">
            <div className="modal__content__header__profile">
              <div className="modal_content__header__profile__image">
                <img
                  src={cardData.profileImageURL}
                  alt="프로필 사진"
                  className="profile-picture--large"
                />
              </div>
              <div className="modal__content__header__profile__name">
                <p>From. {cardData.sender}</p>
                <div className="modal__content__header__profile__relationship">
                  {cardData.relationship === "지인" ? (
                    <span className="badge__orange">지인</span>
                  ) : cardData.relationship === "동료" ? (
                    <span className="badge__purple">동료</span>
                  ) : cardData.relationship === "가족" ? (
                    <span className="badge__green">가족</span>
                  ) : cardData.relationship === "친구" ? (
                    <span className="badge__blue">친구</span>
                  ) : (
                    <p>Unknown Sender</p>
                  )}
                </div>
              </div>
            </div>
            <div className="modal__content__header__message-created">
              <p>{formatedDate}</p>
            </div>
          </div>
          <div className="modal__content__body">{cardData.content}</div>

          <div className="modal__button-container">
            <button
              className="button--fill-primary button__size-h40"
              onClick={closeModal} // 확인 버튼 클릭 시 모달 닫기
            >
              확인
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
