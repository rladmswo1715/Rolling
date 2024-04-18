import './dropBox.scss';
import { useState, useRef } from "react";

function dropBoxArrowToggle(element, toggleBoolean) {
  element.classList.toggle('hide', toggleBoolean);
}

const LIST_SET = {
  "relation" : ['지인', '친구', '동료', '가족'],
  "font" : ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체']
}

export default function RelationDropBox({boxType}) {
  const [seletedRelation, setSelectedRelation] = useState(LIST_SET[boxType][0]);
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const dropDownRef = useRef(null);

  function handleSelectRelation(e) {
    if(e.target.nodeName === 'UL') {
      e.preventDefault();
      return false;
    };
    setSelectedRelation(e.target.dataset.value);
    setIsDropBoxOpen(false);
    dropBoxArrowToggle(dropDownRef.current, false);
  }

  function handleOpenDropBox(e) {
    isDropBoxOpen ? setIsDropBoxOpen(false) : setIsDropBoxOpen(true);
    dropBoxArrowToggle(e.target, !isDropBoxOpen);
  }

  return (
    <div className="dropdown">
      <button type="button" className="dropdown__toggle" ref={dropDownRef} onClick={handleOpenDropBox}>{seletedRelation}</button>
      {isDropBoxOpen && 
        <ul className="dropdown__menu" onClick={handleSelectRelation}>
          {LIST_SET[boxType].map((listItem)=> {
            return <li key={listItem} className="item" data-value={listItem}>{listItem}</li>
          })}
        </ul>}
    </div>
  )
}