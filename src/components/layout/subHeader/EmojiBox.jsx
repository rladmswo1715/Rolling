import { useRef, useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import Emoji from '../../rollingPost/emoji/Emoji';
import { setPostEmoji } from '../../../api/subHeader';
import './emojiBox.scss';

export default function EmojiBox({
  emojis,
  rollingPageId,
  onToastMessage,
  isEmojiMoreView,
  isEmojiAdd,
  onEmojiAdd,
  onEmojiMoreView,
}) {
  const [selectedEmojis, setSelectedEmojis] = useState(emojis);
  const refID = useRef(0);

  const handleEmojiMoreView = (value) => {
    onEmojiMoreView((prev) => (value === false ? false : !prev));
  };

  const handleEmojiAdd = (value) => {
    onEmojiAdd((prev) => (value === false ? false : !prev));
  };

  // emoji 8개 노출
  const headleEmojiLength = () => {
    if (selectedEmojis.length > 7) {
      onToastMessage('더 이상 추가 할수 없습니다.');
      handleEmojiAdd();
      return false;
    }
    return true;
  };

  // emojiPicker의 emoji 클릭
  const handleEmojiPickerIconClick = (emojiData, e) => {
    if (
      !emojiData ||
      selectedEmojis.some((data) => data.emoji === emojiData.native)
    ) {
      e.currentTarget.disabled = true;
      onToastMessage('추가된 이모지 입니다. 다른 이모지를 선택해 주세요.');
      handleEmojiAdd(false);
      return;
    }

    // 8개 이하 일때
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
      onToastMessage(`${emojiData.native} 이모지가 추가 되었습니다.`);
    }
    handleEmojiAdd(false);
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
    handleEmojiMoreView(false);
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
                onClick={handleEmojiMoreView}
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
          onClick={handleEmojiAdd}
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
