
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Arrivals from './components/NewArrivals/Arrivals';

function App() {
  return (
    <div className="wrapper">
      <div>
        <Header />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Arrivals />
      </div>
    </div>


  );
}
export default App;
