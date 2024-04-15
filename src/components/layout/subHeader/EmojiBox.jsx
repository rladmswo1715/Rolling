import { useState } from "react";
import Emoji from "../../rollingPost/emoji/Emoji";
import "./emojiBox.scss";

export default function EmojiBox({ arrayProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDoropDwonOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="d__flex--btw content--separator emoji-box__wrap">
      <div className="emoji-box__dropdown">
        <div className="emoji-box__dropdown--view d__flex--center">
          {arrayProps.slice(0, 3).map((data) => (
            <Emoji key={data} />
          ))}
          <button
            type="button"
            className={`before-icon emoji-box__dropdown--toggle-btn ${isOpen && "hide"}`}
            onClick={handleDoropDwonOpen}
          >
            <span className="unvisible">열기</span>
          </button>
        </div>
        {isOpen && (
          <div className="emoji-box__dropdown--detail">
            {arrayProps.map((data) => (
              <Emoji key={data} />
            ))}
          </div>
        )}
      </div>
      <button className="button--outlined button__size-h36 before-icon emoji--add">
        <span>추가</span>
      </button>
    </div>
  );
}
