import "./PostToInput";

export default function PostToInput() {
  return (
    <section className="post-to-box">
      <p className="post-to-box__desc"> To. </p>
      <input
        type="text"
        placeholder="받는 사람 이름을 입력해 주세요"
        className="post-to-box__input"
      />
    </section>
  );
}
