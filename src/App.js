import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Pricing from './componetns/Pricing/Pricing';
import PhoneBar from './componetns/PhoneBar/PhoneBar';
import Submit from './componetns/Submit/Submit';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <div>
        <h1 className='text-4xl font-bold underline text-center'>This is a header tag?</h1>
        <p className='text-center'>This is a paragrape tag.</p>
      </div>
      <Pricing></Pricing>
      <Submit></Submit>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
