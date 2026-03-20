import { useState } from "react";

type CardAlarmProps = {
  sport: string;
  title: string;
  subtitle: string;
  date: string;
  time?: string;
  initialEnabled?: boolean;
  onChange?: (enabled: boolean) => void;
};

export function CardAlarm({
  sport = "Soccer",
  title = "Label",
  subtitle = "Label",
  date = "12/10/2022",
  time = "18:00",
  initialEnabled = true,
  onChange,
}: CardAlarmProps) {
  const [enabled, setEnabled] = useState(initialEnabled);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    onChange?.(next);
  };

  return (
    <article className="card-alarm" role="group" aria-label="Toggle alarm card">
      <div className="card-alarm__content">
        <div className="card-alarm__top-row">
          <span className="card-alarm__sport-icon" aria-hidden="true">
            {sport.charAt(0).toUpperCase()}
          </span>
          <span className="card-alarm__sport-label">{sport}</span>
        </div>

        <div className="card-alarm__match">
          <span className="card-alarm__label--strong">{title}</span>
          <span className="card-alarm__label--strong">{subtitle}</span>
          <span className="card-alarm__metadata">{date} • {time}</span>
        </div>
      </div>
      <button
        type="button"
        className={`card-alarm__toggle ${enabled ? "card-alarm__toggle--on" : "card-alarm__toggle--off"}`}
        aria-pressed={enabled}
        onClick={toggle}
      >
        <span className="card-alarm__toggle-track" aria-hidden="true" />
      </button>
    </article>
  );
}
