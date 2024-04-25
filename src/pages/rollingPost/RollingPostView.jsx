import React from 'react';
import {
  getBackgroundImage,
  getBackgroundColor,
} from '../../utills/dataToStyle';
import CardList from '../../components/rollingPost/card/CardList';
import Toast from '../../components/toast/Toast';
import Modal from '../../components/modal/Modal';

function RollingPostView(props) {
  return (
    <section ref={props.cardScrollRef}>
      <div
        className={
          getBackgroundImage(props.background) ||
          getBackgroundColor(props.background)
        }
      >
        <CardList {...props} />
        {props.isModalOpen && <Modal {...props} />}
        <div>{props.isToastShow && <Toast {...props} />}</div>
      </div>
    </section>
  );
}

export default RollingPostView;
