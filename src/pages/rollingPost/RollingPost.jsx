import './rollingPost.scss';
import Card from '../../components/rollingPost/card/Card';

export default function RollingPost() {
  // const handleCardClick = () => {
  //   console.log('버튼 클릭!');
  //   return <Link to={<RollingPostEdit />} />;
  // };

  return (
    <section className="layout__post">
      <div className="inner__size-ls inner__body">
        {/* 여기서 작업해주세요 */}
        <span>생성된 롤링페이퍼 페이지 /post/id</span>
        <Card />
      </div>
    </section>
  );
}
