import RollingPaper from '../../components/rollingList/RollingPaper';
import './recentPapers.scss';

export default function RecentPapers({ recipients }) {
  const recentRecipients = recipients;
  if (!recipients) return null;

  return (
    <div>
      <div className="RecentPapers">
        <h1>최근에 만든 롤링 페이퍼 ⭐️</h1>
        <div className="RecentPapers--papers">
          {recentRecipients.map((recepient) => (
            <RollingPaper key={recepient.id} recepient={recepient} />
          ))}
        </div>
      </div>
    </div>
  );
}
