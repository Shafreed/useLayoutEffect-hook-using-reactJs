import './App.css';
import MyUseEffect from './components/MyUseEffect';
import MyUseLayoutEffect from './components/MyUseLayoutEffect';




function App() {
  return(
  <div className='App'>
    <h1>useEffect vs useLayoutEffect</h1>
    <MyUseEffect/>
    <MyUseLayoutEffect/>
  </div>
  )
}

export default App;
