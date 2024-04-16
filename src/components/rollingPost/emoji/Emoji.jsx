import "./emoji.scss";

function Emoji({ emoji, count, onClickCount }) {
  return (
    <>
      <button className="emoji" onClick={onClickCount}>
        <div className="emoji--emoji">{emoji}</div>
        <span className="emoji--count">{count}</span>
      </button>
    </>
  );
}

export default Emoji;
