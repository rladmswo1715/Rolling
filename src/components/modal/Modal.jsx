import React from 'react';
import './modal.scss';
import Badge from '../rollingPost/card/Badge';
import { formatDate } from '../../utills/time';

export default function Modal({
  isModalOpen,
  modalContents,
  handleCloseModal,
}) {
  const formatedDate = formatDate(modalContents.createdAt);
  const formatSenderInMobile =
    modalContents.sender.length > 5 ? 'mobileSender' : '';

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">
            <div className="modal__content__header__profile">
              <div className="modal__content__header__profile__image">
                <img src={modalContents.profileImageURL} alt="프로필 사진" />
              </div>
              <div className="modal__content__header__profile__name modal__content__header__profile__name">
                <p>From. {modalContents.sender}</p>
                <div className="modal__content__header__profile__relationship">
                  <Badge relationship={modalContents.relationship} />
                </div>
              </div>
            </div>
            <div className="modal__content__header__message-created">
              <p>{formatedDate}</p>
            </div>
          </div>

          <div
            className="modal__content__body content--short"
            dangerouslySetInnerHTML={{ __html: modalContents.content }}
          />

          <div className="modal__button-container">
            <button
              className="button--fill-primary button__size-h40"
              onClick={handleCloseModal}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    )
  );
}
