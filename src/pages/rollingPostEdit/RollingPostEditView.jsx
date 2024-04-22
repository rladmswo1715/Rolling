import React from 'react';
import {
  getBackgroundImage,
  getBackgroundColor,
} from '../../utills/dataToStyle';
import CardDeleteList from '../../components/rollingPostEdit/CardDeleteList';

export default function RollingPostEditView(props) {
  return (
    <section ref={props.cardScrollRef}>
      {props.background && (
        <div
          className={
            getBackgroundImage(props.background) ||
            getBackgroundColor(props.background)
          }
        >
          {props.hasMessage ? (
            <>
              <div className="cards__layout">
                <CardDeleteList {...props} />
              </div>
              <div className="button__layout">
                <button
                  className="button__delete"
                  onClick={props.handleDeleteButtonClick}
                >
                  삭제하기
                </button>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      )}
    </section>
  );
}
