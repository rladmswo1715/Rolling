import React from 'react';

export default function DeleteButton({ id, handleDeleteMessageClick }) {
  return (
    <button
      className="button--outlined button__size-h36 before-icon btn-delete position_fixed"
      onClick={() => {
        handleDeleteMessageClick(id);
      }}
    />
  );
}
