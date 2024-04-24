import { Link } from 'react-router-dom';
import './error.scss';

export default function NotFoundPage() {
  return (
    <div className="error__wrap">
      <h1 className="title font-bold">페이지를 찾을 수 없습니다.</h1>
      <Link className="button--fill-primary button__size-h56" to="/list">
        리스트로 돌아가기
      </Link>
    </div>
  );
}
