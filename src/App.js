import './App.css';
import FirstPage from './pages/FirstPage';
import { setPage } from './redux/textAreaSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SecondPage from './pages/SecondPage';

function App() {
  const page=useSelector(state=>state.texts.pages)
  const dispatch=useDispatch();
  console.log(page);
  return (
    <div className="App">
      <div className='br'>
      <div className='hh'></div>
      <div className='header'>
      <h2>Markdowm  Previewer</h2>
      <div className='buttoncss' ><button className='gg-inbox' onClick={()=>{dispatch(setPage())}} >?</button></div>
      </div>
      </div>

      <div className='bigContent'>
        <div className='pages'>
          {page===true ? <FirstPage></FirstPage> : <SecondPage></SecondPage>}
        </div>
      </div>
    </div>
  );
}

export default App;
