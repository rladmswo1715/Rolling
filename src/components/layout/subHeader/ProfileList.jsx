import './profileList.scss';

export default function ProfileList({ coment }) {
  return (
    <>
      {coment ? (
        <div
          className={`profile-picture d__flex--center ${coment.count > 0 && 'content--separator'} profile-picture__wrap`}
        >
          <div className="d__flex--center profile-picture__list">
            {coment.results.slice(0, 3).map((profile) => (
              <div key={profile.id} className="profile-picture--small">
                <img src={profile.profileImageURL} alt={profile.sender} />
              </div>
            ))}
            {coment.count > 3 && (
              <div className="profile-picture--small profile--counter">
                +{coment.count - 3}
              </div>
            )}
          </div>
          {coment.count > 0 && (
            <div className="profile-picture--write-counter">
              <strong>{coment.count}</strong>
              <span>명이 작성했어요!</span>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}
