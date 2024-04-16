import "./profileList.scss";

export default function ProfileList({ onComent }) {
  const comentLen = onComent.length;
  return (
    <div className="profile-picture d__flex--center content--separator profile-picture__wrap">
      <div className="d__flex--center profile-picture__list">
        {onComent.slice(0, 3).map((profile) => (
          <div key={profile.id} className="profile-picture--small">
            <img src={profile.profileImageURL} alt={profile.sender} />
          </div>
        ))}
        {comentLen > 3 && (
          <div className="profile-picture--small profile--counter">
            +{comentLen - 3}
          </div>
        )}
      </div>
      <div className="profile-picture--write-counter">
        <strong>{comentLen}</strong>
        <span>명이 작성했어요!</span>
      </div>
    </div>
  );
}
