import style from './App.module.css';
import Black from './components/Black/Black';
import White from './components/White/White';

function App() {
  return (
    <div className={style.container}>
      <Black/>
      <White />
      <White />
      <Black />
    </div>
  );
}

export default App;
