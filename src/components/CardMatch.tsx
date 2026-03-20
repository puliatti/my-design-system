const imgGroup = "http://localhost:3845/assets/cffcfdac2f248e040f2b0ab36d280aec1ec2ce3a.svg";
const imgVector = "http://localhost:3845/assets/5f725ffb3cbc79c57c54c35dedc7d81fd11d1979.svg";
const imgSoccerItalia1328Lazio = "http://localhost:3845/assets/892f62562728dad303b5f8d9c012ea327d02fc29.png";
const imgSoccerItalia1322Fiorentina = "http://localhost:3845/assets/f3b443c4ad23f8641abdd7dc7f86812b131a881d.png";

type CardMatchProps = {
  sportLabel?: string;
  team1?: string;
  team2?: string;
  date?: string;
  time?: string;
  marketLabel?: string;
  odds?: [string, string, string];
  badgeLive?: boolean;
  badgePromo?: boolean;
  badgeNumber?: string;
};

export function CardMatch({
  sportLabel = "Label",
  team1 = "Team 1",
  team2 = "Team 2",
  date = "01/01",
  time = "18:00",
  marketLabel = "Market label",
  odds = ["1", "1.55", "1.55"],
  badgeLive = false,
  badgePromo = false,
  badgeNumber = "+ 3490",
}: CardMatchProps) {
  return (
    <article className="card-match" aria-label="Match ticket">
      <header className="card-match__header">
        <div className="card-match__sport">
          <div className="card-match__sport-icon">
            <img src={imgGroup} alt="sport icon" />
          </div>
          <span>{sportLabel}</span>
        </div>

        <div className="card-match__badges">
          {badgePromo && <span className="badge badge--promo">Promo</span>}
          {badgeLive && <span className="badge badge--live">Live</span>}
          <div className="badge badge--count">{badgeNumber}</div>
          <div className="badge badge--stream" aria-hidden="true">
            <img src={imgVector} alt="" />
          </div>
        </div>
      </header>

      <div className="card-match__teams">
        <div className="card-match__team">
          <img src={imgSoccerItalia1328Lazio} alt="Team 1" />
          <span>{team1}</span>
        </div>

        <div className="card-match__center">
          <div className="card-match__central-time">
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </div>

        <div className="card-match__team">
          <img src={imgSoccerItalia1322Fiorentina} alt="Team 2" />
          <span>{team2}</span>
        </div>
      </div>

      <div className="card-match__market-label">{marketLabel}</div>

      <div className="card-match__odds">
        {odds.map((o, index) => (
          <button key={index} type="button" className="card-match__odds-btn">
            <div className="card-match__odds-value">{o}</div>
            <div className="card-match__odds-label">{index === 0 ? "1" : ""}</div>
          </button>
        ))}
      </div>
    </article>
  );
}
