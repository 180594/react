
import './App.css';
import '../src/style/cadre.css';
import '../src/style/caderss.css';
import Cartsxample from './component/card';
import Carsxample from './component/card2';
import GroupExample from './component/cards';
import Carsolexample from './component/carsole';
import FigureExample from './component/image';
import StyleExample from './component/list';
import NavScrollExample from './component/Navigation';
import ButtoExemple from './component/buttong';



function App() {
  return (
    <div className="App">
      
      <header >
      <div><NavScrollExample/></div>
      <div className='first'>
      <div className='stylez'> <StyleExample/></div>
      <div className='figure' ><FigureExample/></div>
      </div>
      <div className='caders'>
     <Carsolexample/>
      <GroupExample/>
     <Cartsxample/>
     <Carsxample/>
     </div>
     <div className='basic'><ButtoExemple/></div>
      
      
       
        
        
        
      </header>
    </div>
  );
}

export default App;
