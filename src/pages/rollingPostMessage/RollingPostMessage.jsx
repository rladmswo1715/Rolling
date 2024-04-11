export default function RollingPostMessage() {
  return (
    <section>
      <form>
        <div>
          <span>From.</span>
          <input type="text" />
        </div>

        <div>
          <span>프로필 이미지</span>
          <div>
            이미지
          </div>
          <div>
            <span>프로필 이미지를 선택해주세요!</span>
            <div>이미지 리스트</div>
          </div>
        </div>

        <div>
          <span>상대와의 관계</span>
          <select>
            <option>지인</option>
          </select>
        </div>

        <div>
          <span>내용을 입력해 주세요</span>
          <div>에디터</div>
        </div>

        <div>
          <span>폰트 선택</span>
          <select>
            <option>Noto Sans</option>
          </select>
        </div>
      </form>
    </section>
  );
}