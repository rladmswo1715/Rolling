import { useRef, useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import Emoji from '../../rollingPost/emoji/Emoji';
import { setPostEmoji } from '../../../api/subHeader';
import './emojiBox.scss';

export default function EmojiBox({ emojis, rollingPageId }) {
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
      selectedEmojis.some((data) => data.emoji === emojiData.native)
    )
      return;
    // 8개 까지만 emoji 추가
    if (headleEmojiLength()) {
      setSelectedEmojis((prev) => [
        ...prev,
        {
          id: refID.current++,
          emoji: emojiData.native,
          count: 1,
        },
      ]);
      setPostEmoji(rollingPageId, 'POST', emojiData.native, 'increase');
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
    setPostEmoji(rollingPageId, 'POST', emojiApiUpdate.emoji, 'increase');
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
                onClickCount={() => handleEmojiClickCount(emoji.id)}
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
        {isEmojiAdd && (
          <div className="emoji-box--picker-box">
            <Picker data={data} onEmojiSelect={handleEmojiPickerIconClick} />
          </div>
        )}
      </div>
    </div>
  );
}
