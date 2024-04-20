import React, { useState, useEffect, useRef } from 'react';
import './card.scss';
import '../../../styles/fonts.scss';

function addFontClassName(font, obj) {
  // console.log('font', font);
  //console.log("obj",obj.classList.add("zzz"));
  let addClassName = '';

  if (font === 'Noto Sans') addClassName = 'font__notosans';
  else if (font === 'Pretendard') addClassName = 'font__pretendard';
  else if (font === '나눔명조') addClassName = 'font__nanum__myeongjo';
  else if (font === '나눔손글씨 손편지체')
    addClassName = 'font__nanum_songuelssi';

  if (obj && addClassName !== '') obj.classList.add(addClassName);
}

function CardContent({ content, font }) {
  const [hasFont, setHasFont] = useState({
    fontFamily: false,
    fontStyle: false,
    fontWeight: false,
  });

  const fontClassRef = useRef(null);

  useEffect(() => {
    addFontClassName(font, fontClassRef.current);
  }, []);

  return (
    <p className="content--short" ref={fontClassRef}>
      {content}
    </p>
  );
}

export default CardContent;
