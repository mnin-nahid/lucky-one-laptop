import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Qna from './components/Qna/Qna';

function App() {
  return (
    <div className='main'>
      <Header></Header>
      <Products></Products>
      <Qna></Qna>
    </div>
  );
}

export default App;
