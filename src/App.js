import './App.scss';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <main className="app">
      <Sidebar />
      <Main />
    </main>
  );
}

export default App;
