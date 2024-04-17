import "./emojiBox.scss";
import { useRef, useState } from "react";
import Emoji from "../../rollingPost/emoji/Emoji";
import { BASE_URL_RECIPIENT } from "../../../constants/url";
import EmojiPicker from "emoji-picker-react";

async function setPostEmoji(id, method, emoji, type) {
  try {
    const response = await fetch(`${BASE_URL_RECIPIENT}${id}/reactions/`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emoji,
        type,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to ${type} reaction`);
    }
  } catch (e) {
    throw new Error(e);
  }
}

export default function EmojiBox({ onEmoji, onID }) {
  const [isEmojiAdd, setIsEmojiAdd] = useState(false);
  const [isEmojiMore, setIsEmojiMore] = useState(false);
  const [isSelectedEmojis, setIsSelectedEmojis] = useState(onEmoji?.results || []);
  const refID = useRef(0);

  const handleDoropDwonOpen = () => {
    setIsEmojiMore((prev) => !prev);
  };

  const handleEmojiPickerOpen = () => {
    setIsEmojiAdd((prev) => !prev);
  };

  // emoji 8개 노출
  const headleEmojiLength = () => {
    return isSelectedEmojis.length > 7 ? false : true;
  };

  // emojiPicker의 emoji 클릭
  const handleEmojiPickerIconClick = (emojiData) => {
    if (
      !emojiData ||
      isSelectedEmojis.some((data) => data.emoji === emojiData.emoji)
    )
      return;
    // 8개 까지만 emoji 추가
    if (headleEmojiLength()) {
      setIsSelectedEmojis((prev) => [
        ...prev,
        {
          id: refID.current++,
          emoji: emojiData.emoji,
          count: 1,
        },
      ]);
      setPostEmoji(onID, "POST", emojiData.emoji, "increase");
    }
    setIsEmojiAdd(false);
    return;
  };

  const hendleStateUpdate = (id) => {
    const emojiStateUpdate = isSelectedEmojis.map((emoji) =>
      emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
    );
    return emojiStateUpdate.sort((a, b) => b.count - a.count);
  };

  // emoji count 증가
  const handleEmojiClickCount = (id) => {
    const emojiApiUpdate = isSelectedEmojis.find(
      (emoji) => emoji.id === id && emoji
    );
    setPostEmoji(onID, "POST", emojiApiUpdate.emoji, "increase");
    setIsSelectedEmojis(() => hendleStateUpdate(id));
  };

  return (
    <div className="d__flex--btw content--separator emoji-box__wrap">
      <div className="emoji-box__dropdown">
        <div className="emoji-box__dropdown--view d__flex--center">
          {isSelectedEmojis.slice(0, 3).map((emoji, i) => (
            <Emoji
              key={emoji.id}
              {...emoji}
              onClickCount={() => handleEmojiClickCount(emoji.id, emoji.emoji)}
            />
          ))}
          {isSelectedEmojis.length > 3 && (
            <button
              type="button"
              className={`before-icon emoji-box__dropdown--toggle-btn ${isEmojiMore && "hide"}`}
              onClick={handleDoropDwonOpen}
            >
              <span className="unvisible">열기</span>
            </button>
          )}
        </div>
        {isEmojiMore && (
          <div className="emoji-box__dropdown--detail">
            {isSelectedEmojis.map((emoji) => (
              <Emoji
                key={emoji.id}
                {...emoji}
                onClickCount={() => handleEmojiClickCount(emoji.id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="emoji-box__add-box">
        <button
          className="button--outlined button__size-h36 before-icon emoji--add"
          onClick={handleEmojiPickerOpen}
        >
          <span>추가</span>
        </button>
        <div className="emoji-box--picker-box">
          <EmojiPicker
            emojiStyle={"google"}
            searchDisabled={true}
            previewConfig={{
              showPreview: false,
            }}
            lazyLoadEmojis={true}
            open={isEmojiAdd}
            onEmojiClick={handleEmojiPickerIconClick}
          />
        </div>
      </div>
    </div>
  );
}
