import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetData } from '../../../hooks/useGetData';
import { BASE_URL_RECIPIENT } from '../../../constants/url';
import ProfileList from './ProfileList';
import EmojiBox from './EmojiBox';
import ShareBox from '../../share/ShareBox';
import Toast from '../../toast/Toast';
import './subHeader.scss';

export default function SubHeader() {
  const { id } = useParams();
  const [isShowToast, setIsShowToast] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isEmojiAdd, setIsEmojiAdd] = useState(false);
  const [isEmojiMoreView, setIsEmojiMoreView] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const { data: getAllapi, isLoading: allLoading } = useGetData(
    `${BASE_URL_RECIPIENT}${id}/`
  );
  const { data: getEmojiApi, isLoading: emojiLoading } = useGetData(
    `${BASE_URL_RECIPIENT}${id}/reactions/`
  );

  const handleShareOpen = (value) => {
    setIsShareOpen(value);
    setIsEmojiAdd(false);
    setIsEmojiMoreView(false);
  };

  const handleEmojiMoreView = (value) => {
    setIsEmojiMoreView(value);
    setIsEmojiAdd(false);
    setIsShareOpen(false);
  };

  const handleEmojiPickerOpen = (value) => {
    setIsEmojiAdd(value);
    setIsEmojiMoreView(false);
    setIsShareOpen(false);
  };

  // Toast
  const handleToast = (message) => {
    setMessageText(message);
    setIsShowToast(true);
    setTimeout(() => setIsShowToast(false), 1500);
  };

  const Loading = allLoading === false && emojiLoading === false;

  return (
    <section className="subHeader__wrap">
      <div className="inner__size-ls d__flex--btw header__inner subHeader__inner">
        {!Loading || (
          <>
            <div className="d__flex--center subHeader__left">
              <Link to="/list" className="before-icon btn-back">
                <span className="unvisible">뒤로가기</span>
              </Link>
              <h1 className="subHeader__title">To. {getAllapi?.name}</h1>
            </div>
            <div className="d__flex--center subHeader__right">
              {getAllapi && <ProfileList coment={getAllapi.recentMessages} />}
              <EmojiBox
                emojis={getEmojiApi?.results}
                rollingPageId={id}
                onToastMessage={handleToast}
                isEmojiMoreView={isEmojiMoreView}
                isEmojiAdd={isEmojiAdd}
                onEmojiMoreView={handleEmojiMoreView}
                onEmojiAdd={handleEmojiPickerOpen}
              />
              <ShareBox
                name={getAllapi?.name || ''}
                onToastMessage={handleToast}
                isShareOpen={isShareOpen}
                onShareOpen={handleShareOpen}
              />
            </div>
          </>
        )}
      </div>
      {isShowToast && <Toast message={messageText} />}
    </section>
  );
}
