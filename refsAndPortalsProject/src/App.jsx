import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';


function App() {
  
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
          <TimerChallenge title="Medium" targetTime={5}></TimerChallenge>
          <TimerChallenge title="Hard" targetTime={20}></TimerChallenge>
          <TimerChallenge title="Expert" targetTime={120}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
