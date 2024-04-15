import RollingPaper from '../../components/rollingList/RollingPaper';
import './popularPapers.scss';

export default function PopularPapers({ recipients }) {
  const popularRecipients = recipients;

  if (!recipients) return null;

  return (
    <div className="PopularPapers">
      <h1>인기 롤링 페이퍼 🔥</h1>
      <div className="PopularPapers--papers">
        {popularRecipients.map((recepient) => (
          <RollingPaper key={recepient.id} recepient={recepient} />
        ))}
      </div>
    </div>
  );
}
