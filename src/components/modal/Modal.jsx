import React, { useRef, useEffect } from 'react';
import './modal.scss';
import '../../styles/fonts.scss';
import Badge from '../rollingPost/card/Badge';
import { formatDate } from '../../utills/time';

function addFontClassName(font, obj) {
  let addClassName = '';

  if (font === 'Noto Sans') addClassName = 'font__notosans';
  else if (font === 'Pretendard') addClassName = 'font__pretendard';
  else if (font === '나눔명조') addClassName = 'font__nanum__myeongjo';
  else if (font === '나눔손글씨 손편지체')
    addClassName = 'font__nanum_songuelssi';

  if (obj && addClassName !== '') obj.classList.add(addClassName);
}

export default function Modal({
  isModalOpen,
  modalContents,
  handleCloseModal,
}) {
  const fontClassRef = useRef(null);
  const formatedDate = formatDate(modalContents.createdAt);
  const formatSenderInMobile =
    modalContents.sender.length > 5 ? 'mobileSender' : '';

  useEffect(() => {
    addFontClassName(modalContents.font, fontClassRef.current);
  }, [modalContents]);

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
            ref={fontClassRef}
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
