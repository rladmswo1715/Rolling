const header = {
  height: '68px',
  position: 'fixed',
  top: '65px',
  left: 0,
  right: 0,
  background: '#ccc'
}
export default function SubHeader() {
  return (
    <nav className="sub-header">
      <ul>
        <li>
          <p>
            To<p>Codeit</p>
          </p>
        </li>
        <li>
          <div>
            <img />
            <img />
            <img />
          </div>
        </li>
        <li>23명이 작성했어요!</li>
        <li>
          <Emoji />
          <Emoji />
          <Emoji />
        </li>
        <li>▼</li>
        <li>
          <button className="button--outlined button__size-h36 before-icon btn-add">
            <img src={addIcon} />
            <span>추가</span>
          </button>
        </div>
      </div>
    </section>
  );
}
