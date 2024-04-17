import { useState } from "react";
import "./shareBox.scss";

export default function ShareBox() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleDoropDwonOpen = () => {
    setIsShareOpen((prev) => !prev);
  };

  return (
    <div className="dropdown share-box--wrap">
      <button
        className="button--outlined button__size-h36 before-icon btn-share"
        onClick={handleDoropDwonOpen}
      >
        <span className="unvisible">공유하기</span>
      </button>
      {isShareOpen && (
        <div className="dropdown__menu">
          <button className="item">카카오톡 공유</button>
          <button className="item">URL 공유</button>
        </div>
      )}
    </div>
  );
}
