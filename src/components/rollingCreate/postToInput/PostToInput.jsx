import "./PostToInput.scss";

export default function PostToInput() {
  return (
    <section className="post-to-box">
      <p className="post-to-box__desc"> To. </p>
      <input
        type="text"
        class="input__element"
        placeholder="받는 사람 이름을 입력해 주세요"
      />
      <p class="error--message">Error Massage</p>
    </section>
  );
}
