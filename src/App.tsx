import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { CardAlarm } from './components/CardAlarm'
import { CardButton } from './components/CardButton'
import { CardMatch } from './components/CardMatch'
import { ReadyToUseCardQuizbet } from './components/ReadyToUseCardQuizbet'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 24 }}>
          <CardButton label="Calcio" type="speciali" />
          <CardButton label="Tennis" type="speciali" badgeNew />
          <CardButton label="Basket" type="recent" />
        </div>

        <CardAlarm
          sport="Label"
          title="Label"
          subtitle="Label"
          date="12/10/2022"
          initialEnabled={true}
        />
        <CardMatch
          sportLabel="Label"
          team1="Team 1"
          team2="Team 2"
          date="01/01"
          time="18:00"
          marketLabel="Market label"
          odds={[
            { label: "1", value: "1.55" },
            { label: "1", value: "1.55" },
            { label: "1", value: "1.55" },
          ]}
          badgeNumber="+ 3490"
        />

        <ReadyToUseCardQuizbet
          sport="ITA Serie A"
          teamLeft="Lazio"
          teamRight="Fiorentina"
          scoreDate="01/01 18:00"
          statusText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          currentQuestion={1}
          totalQuestions={7}
          oddsOptions={[
            { label: "1", value: "1.55" },
            { label: "1", value: "1.55" },
            { label: "1", value: "1.55" },
          ]}
        />

        <ReadyToUseCardQuizbet
          sport="ITA Serie A"
          teamLeft="Lazio"
          teamRight="Fiorentina"
          scoreDate="01/01 18:00"
          statusText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          currentQuestion={1}
          totalQuestions={7}
          variant="compact"
          oddsOptions={[
            { label: "1", value: "1.55" },
            { label: "1", value: "1.55" },
          ]}
        />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
