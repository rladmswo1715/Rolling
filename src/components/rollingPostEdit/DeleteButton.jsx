import React from 'react';
import { BASE_URL_MESSAGE } from '../../constants/url';

export default function DeleteButton({ id }) {
  const handleDeleteMessageClick = async () => {
    try {
      const response = await fetch(`${BASE_URL_MESSAGE}${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('롤링 페이퍼를 삭제하는데 실패했습니다');
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="button--outlined button__size-h36 before-icon btn-delete position_fixed"
      onClick={handleDeleteMessageClick}
    />
  );
}
