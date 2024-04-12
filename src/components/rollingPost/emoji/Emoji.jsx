import './emoji.scss';
function Emoji() {
  const handleToggleEmoji = () => {
    console.log('이모지 클릭!');
  };

  return (
    <>
      <button className="emoji" onClick={handleToggleEmoji}>
        <div className="emoji--emoji">😍</div>
        <span className="emoji--count">34</span>
      </button>
    </>
  );
}

export default Emoji;
