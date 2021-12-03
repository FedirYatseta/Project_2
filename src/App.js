
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
// import Section from './components/Section/Section';
// import Arrivals from './components/NewArrival/Arrivals';
import Footer from './components/Footer/Footer';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom"
import FormReg from "./components/Header/Nav//Topbar/Register/Reg"
// import Slider from './components/Header/Nav/Slider/Slider';
import Content from './components/Content/Content';
import NotFound from './components/NotFound/NotFound';
import Women from './components/Content/Women/Women';
import Subscribe from './components/SectionSub/Subscribe';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        {/*
        <Arrivals />
       */}
        <div className="content-body">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/women" element={ <Women />} />
            <Route path="/men" element={ <FormReg />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
       
        </div>

        {/* <Route path="/man" render={() => <FormReg />} /> */}
        <Subscribe />
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}
export default App;
