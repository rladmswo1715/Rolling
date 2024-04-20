import './rollingPostMessage.scss';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NameInput from '../../components/rollingPostMessage/NameInput';
import ProfileBox from '../../components/rollingPostMessage/ProfileBox';
import DropBox from '../../components/rollingPostMessage/DropBox';
import TextEditor from '../../components/rollingPostMessage/TextEditor';
import Toast from '../../components/toast/Toast';
import { MsgCreateDataSet } from '../../context/MsgCreateDataSet';
import { createMessageFetch } from '../../api/rollingPostMessage';


export default function RollingPostMessage() {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const [data, setData] = useState({
    id: id,
    sender: "",
    profileImageURL: "",
    relationship: "",
    content: "",
    font: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if(data.sender === "" || data.content === ""){
        alert("내용을 모두 입력해주세요.");
        return false;
      }
      
      setShowToast(true);
      const result = await createMessageFetch(id, data);

      if(!result){
        throw new Error('에러 발생!');
      }
      alert("메세지를 등록하였습니다.");
      navigate(`/post/${id}`);
    }catch(error) {
      alert(error.message);
    }finally {
      setShowToast(false);
    }
  }

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
              <DropBox boxType="relationship" />
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
          <button 
            className="button--fill-primary button__size-h56 font-bold send-form__btn"
            disabled={(data.sender === "" || data.content === "")}
          >
            생성하기
          </button>
        </form>
        {showToast && <Toast message="메세지를 등록 중입니다..." />}
      </div>
    </section>
  );
}
