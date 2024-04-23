export const deleteData = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('롤링 페이퍼를 삭제하는데 실패했습니다');
    }
  } catch (error) {
    console.error(error);
  }
};
