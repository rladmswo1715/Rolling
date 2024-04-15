import React from "react";
import "./modal.scss";

export function Modal({}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <div className="modal__content__header__profile">
            <div className="modal_content__header__profile__image">
              {/* <img src={cardData.profileImageURL} /> */} 프로필
            </div>
            <div className="modal__content__header__profile__name">
              <p>From. sender</p>
              <div className="modal__content__header__profile__relationship">
                {/* {cardData.relationship === "지인" ? (
                    <span class="badge__orange">지인</span>
                  ) : cardData.relationship === "동료" ? (
                    <span class="badge__purple">동료</span>
                  ) : cardData.relationship === "가족" ? (
                    <span class="badge__green">가족</span>
                  ) : cardData.relationship === "친구" ? (
                    <span class="badge__blue">친구</span>
                  ) : ( */}
                <p>Unknown Sender</p>
                {/* )} */}
              </div>
            </div>
          </div>
          <div className="modal__content__header__message-created">
            <p>생성시간</p>
            {/* {cardData.createdAt} */}
          </div>
        </div>
        <div className="modal__content__body">제목과 본문 분리선</div>

        {/* <div className="modal__content__body">{cardData.content}</div> */}
        <button class="button--fill-primary button__size-h40">확인</button>
      </div>
    </div>
  );
}

export default Modal;
