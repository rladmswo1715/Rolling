import './profileList.scss';
export default function ProfileList({ arrayProps }) {
  return (
    <div className="profile-picture d__flex--center content--separator profile-picture__wrap">
      <div className="d__flex--center profile-picture__list">
        {arrayProps.slice(0, 3).map((data) => (
          <div key={data} className="profile-picture--small">
            <img
              src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/gift/pdt/1662/hot1606353441513.jpg"
              alt="유저프로필 이미지1"
            />
          </div>
        ))}
        <div className="profile-picture--small profile--counter">
          +{arrayProps.length - 3}
        </div>
      </div>
      <div className="profile-picture--write-counter">
        <strong>{arrayProps.length}</strong>
        <span>명이 작성했어요!</span>
      </div>
    </div>
  );
}
