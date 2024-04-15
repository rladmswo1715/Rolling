import './profileBox.scss';
import { useEffect,useState,useCallback } from "react";
import { useGetData } from "../../utills/hooks/useGetData";
import { BASE_URL } from "../../constants/url.js";
import ProfileImage from "./ProfileImage";

export default function ProfileBox() {
  const {data, error} = useGetData(`${BASE_URL}profile-images/`);
  const [currentProfileImg, setCurrentProfileImg] = useState(null);

  if(error) {
    alert("프로필 이미지를 불러오는데 실패했습니다.");
  }

  useEffect(() => {
    setCurrentProfileImg(data?.imageUrls[0]);
  },[data]);
  
  
  return (
    <div className="send-form__profile-wrap">
      <div className="profile-picture--xlarge">
        {currentProfileImg && <img src={currentProfileImg} alt="프로필 이미지" />}
      </div>
      <div className="send-form__profile-wrap-inner">
        <span>프로필 이미지를 선택해주세요!</span>
        <ul className="send-form__profile-list">
          {data && data.imageUrls.map((imageUrl) => {
            return <ProfileImage key={imageUrl} imgUrl={imageUrl} setCurrentImg={setCurrentProfileImg} />
          })}
        </ul>
      </div>
    </div>
  )
}