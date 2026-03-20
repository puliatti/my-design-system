type OddsButton = {
  label: string;
  value: string;
};

type ReadyToUseCardQuizbetProps = {
  sport?: string;
  teamLeft?: string;
  teamRight?: string;
  scoreDate?: string;
  statusText?: string;
  currentQuestion?: number;
  totalQuestions?: number;
  oddsOptions?: OddsButton[];
  onSelectOdd?: (odd: OddsButton) => void;
  variant?: "standard" | "compact";
};

export function ReadyToUseCardQuizbet({
  sport = "ITA Serie A",
  teamLeft = "Lazio",
  teamRight = "Fiorentina",
  scoreDate = "01/01 18:00",
  statusText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  currentQuestion = 1,
  totalQuestions = 7,
  oddsOptions = [
    { label: "1", value: "1.55" },
    { label: "1", value: "1.55" },
    { label: "1", value: "1.55" },
  ],
  onSelectOdd,
  variant = "standard",
}: ReadyToUseCardQuizbetProps & { variant?: "standard" | "compact" }) {
  const twoOptions = variant === "compact";

  return (
    <article className={`quizbet-card ${twoOptions ? "quizbet-card--compact" : ""}`} aria-label="Quizbet card">
      <div className="quizbet-card__header">
        <div className="quizbet-card__team quizbet-card__team--left">
          <div className="quizbet-card__shirt" aria-hidden="true" />
          <span>{teamLeft}</span>
        </div>

        <div className="quizbet-card__center">
          <div className="quizbet-card__sport">{sport}</div>
          <div className="quizbet-card__score-date">{scoreDate}</div>
          <div className="quizbet-card__counter">{currentQuestion} di {totalQuestions}</div>
        </div>

        <div className="quizbet-card__team quizbet-card__team--right">
          <div className="quizbet-card__shirt quizbet-card__shirt--alt" aria-hidden="true" />
          <span>{teamRight}</span>
        </div>
      </div>

      <div className="quizbet-card__body">
        <div className="quizbet-card__question">{statusText}</div>
      </div>

      <div className="quizbet-card__odds-row">
        {(twoOptions ? oddsOptions.slice(0, 2) : oddsOptions).map((odds, idx) => (
          <button
            key={idx}
            type="button"
            className="quizbet-card__odd-button"
            onClick={() => onSelectOdd?.(odds)}
          >
            <span className="quizbet-card__odd-label">{odds.label}</span>
            <span className="quizbet-card__odd-value">{odds.value}</span>
          </button>
        ))}
      </div>
    </article>
  );
}

export default ReadyToUseCardQuizbet;
