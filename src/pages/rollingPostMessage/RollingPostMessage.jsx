import './rollingPostMessage.scss';
import NameInput from '../../components/rollingPostMessage/NameInput';
import ProfileBox from '../../components/rollingPostMessage/ProfileBox';
import DropBox from '../../components/rollingPostMessage/DropBox';
import TextEditor from '../../components/rollingPostMessage/TextEditor';
import { useState } from 'react';
import { MsgCreateDataSet } from '../../context/MsgCreateDataSet';

export default function RollingPostMessage() {

  const [data, setData] = useState({
    name: "",
    profileImage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, profileImage } = data;

    console.log("Name:", name);
    console.log("Profile Image:", profileImage);

  };
  
  return (
    <section className="layout__message">
      <div className="inner__size-ms inner__body">
        <form className="send-form" onSubmit={handleSubmit}>
          <MsgCreateDataSet.Provider value={{setData}}>
            <div className="send-form__content">
              <span>From.</span>
              <NameInput />
            </div>

            <div className="send-form__content">
              <span>프로필 이미지</span>
              <ProfileBox />
            </div>

            <div className="send-form__content">
              <span>상대와의 관계</span>
              <DropBox boxType="relation" />
            </div>

            <div className="send-form__content">
              <span>내용을 입력해 주세요</span>
              <TextEditor />
            </div>

            <div className="send-form__content">
              <span>폰트 선택</span>
              <DropBox boxType="font" />
            </div>
          </MsgCreateDataSet.Provider>
          <button className="button--fill-primary button__size-h56 font-bold send-form__btn">생성하기</button>
        </form>
      </div>
    </section>
  );
}