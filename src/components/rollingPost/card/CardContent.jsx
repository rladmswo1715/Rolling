import React, { useState, useEffect, useRef } from 'react';
import './card.scss';
import '../../../styles/fonts.scss';
import './cardContent.scss';

function addFontClassName(font, obj) {
  let addClassName = '';

  if (font === 'Noto Sans') addClassName = 'font__notosans';
  else if (font === 'Pretendard') addClassName = 'font__pretendard';
  else if (font === '나눔명조') addClassName = 'font__nanum__myeongjo';
  else if (font === '나눔손글씨 손편지체')
    addClassName = 'font__nanum_songuelssi';

  if (obj && addClassName !== '') obj.classList.add(addClassName);
}

export function CardContent({ content, font }) {
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
    <div
      className="content--short "
      ref={fontClassRef}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default CardContent;
