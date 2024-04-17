import { useState } from "react";

export default function RelationDropBox() {
  const [seletedRelation, setSelectedRelation] = useState('지인');
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);

  function handleSelectRelation(e) {
    if(e.target.nodeName === 'UL') {
      e.preventDefault();
      return false;
    };
    setSelectedRelation(e.target.dataset.value);
    setIsDropBoxOpen(false);
  }

  function handleOpenDropBox(e) {
    isDropBoxOpen ? setIsDropBoxOpen(false) : setIsDropBoxOpen(true);
  }

  return (
    <div className="dropdown">
      <button type="button" className="dropdown__toggle hide" onClick={handleOpenDropBox}>{seletedRelation}</button>
      {isDropBoxOpen && 
        <ul className="dropdown__menu" onClick={handleSelectRelation}>
          <li className="item" data-value={"지인"}>지인</li>
          <li className="item" data-value={"친구"}>친구</li>
          <li className="item" data-value={"동료"}>동료</li>
          <li className="item" data-value={"가족"}>가족</li>
        </ul>}
    </div>
  )
}