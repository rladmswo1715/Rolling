import './profileImage.scss';

export default function ProfileImage({imgUrl, setCurrentImg}) {

  function handleImageClick() {
    setCurrentImg(imgUrl);
  }

  return (
    <li className="profile-picture--large" onClick={handleImageClick}>
      <img src={imgUrl} alt="프로필 이미지 리스트" />
    </li>
  )
}