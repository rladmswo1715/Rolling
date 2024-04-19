import './emojiBox.scss';
import { useRef, useState } from 'react';
import Emoji from '../../rollingPost/emoji/Emoji';
import { BASE_URL_RECIPIENT } from '../../../constants/url';
import EmojiPicker from 'emoji-picker-react';

async function setPostEmoji(id, method, emoji, type) {
  try {
    await fetch(`${BASE_URL_RECIPIENT}${id}/reactions/`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emoji,
        type,
      }),
    });
  } catch (e) {
    throw new Error('이모지 POST 전송 실패 :', e);
  }
}

export default function EmojiBox({ emojis, id }) {
  const [isEmojiAdd, setIsEmojiAdd] = useState(false);
  const [isEmojiMoreView, setIsEmojiMoreView] = useState(false);
  const [selectedEmojis, setSelectedEmojis] = useState(emojis);
  const refID = useRef(0);
  const handleDoropDwonOpen = () => {
    setIsEmojiMoreView((prev) => !prev);
  };

  const handleEmojiPickerOpen = () => {
    setIsEmojiAdd((prev) => !prev);
  };

  // emoji 8개 노출
  const headleEmojiLength = () => {
    return selectedEmojis.length > 7 ? false : true;
  };

  // emojiPicker의 emoji 클릭
  const handleEmojiPickerIconClick = (emojiData) => {
    if (
      !emojiData ||
      selectedEmojis.some((data) => data.emoji === emojiData.emoji)
    )
      return;
    // 8개 까지만 emoji 추가
    if (headleEmojiLength()) {
      setSelectedEmojis((prev) => [
        ...prev,
        {
          id: refID.current++,
          emoji: emojiData.emoji,
          count: 1,
        },
      ]);
      setPostEmoji(id, 'POST', emojiData.emoji, 'increase');
    }
    setIsEmojiAdd(false);
    return;
  };

  // emoji count 증가
  const hendleStateUpdate = (id) => {
    const emojiStateUpdate = selectedEmojis.map((emoji) =>
      emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
    );
    return emojiStateUpdate.sort((a, b) => b.count - a.count);
  };

  const handleEmojiClickCount = (id) => {
    const emojiApiUpdate = selectedEmojis.find(
      (emoji) => emoji.id === id && emoji
    );
    setPostEmoji(id, 'POST', emojiApiUpdate.emoji, 'increase');
    setSelectedEmojis(() => hendleStateUpdate(id));
    setIsEmojiMoreView(false);
  };

  return (
    <div className="d__flex--btw content--separator emoji-box__wrap">
      {selectedEmojis && (
        <div className="emoji-box__dropdown">
          <div className="emoji-box__dropdown--view d__flex--center">
            {selectedEmojis.slice(0, 3).map((emoji, i) => (
              <Emoji
                key={emoji.id}
                {...emoji}
                onClickCount={() =>
                  handleEmojiClickCount(emoji.id, emoji.emoji)
                }
              />
            ))}
            {selectedEmojis.length > 3 && (
              <button
                type="button"
                className={`before-icon emoji-box__dropdown--toggle-btn ${isEmojiMoreView && 'hide'}`}
                onClick={handleDoropDwonOpen}
              >
                <span className="unvisible">열기</span>
              </button>
            )}
          </div>
          {isEmojiMoreView && (
            <div className="emoji-box__dropdown--detail">
              {selectedEmojis.map((emoji) => (
                <Emoji
                  key={emoji.id}
                  {...emoji}
                  onClickCount={() => handleEmojiClickCount(emoji.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="emoji-box__add-box">
        <button
          className="button--outlined button__size-h36 before-icon emoji--add"
          onClick={handleEmojiPickerOpen}
        >
          <span>추가</span>
        </button>
        <div className="emoji-box--picker-box">
          <EmojiPicker
            emojiStyle={'google'}
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
