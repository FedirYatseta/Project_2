
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Arrivals from './components/NewArrival/Arrivals';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <div>
        <Header />
      </div>
      <div>
        <Section />
      </div>
      {/* <div>
        <Arrivals />
      </div> */}
      <div>
          <Footer />
      </div>
    </div>


  );
}
export default App;
