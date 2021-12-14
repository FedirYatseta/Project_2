
import './client/css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useContext,useEffect} from 'react'
import Header from './client/components/Header/Header';
//import Section from './components/Section/Section';
//import Arrivals from './components/NewArrival/Arrivals';
import Footer from './client/components/Footer/Footer';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom"
import FormReg from "./client/components/Header/Nav//Topbar/Register/Reg"
//import Slider from './components/Header/Nav/Slider/Slider';
import Content from './client/components/Content/Content';
import NotFound from './client/components/NotFound/NotFound';
import Women from './client/components/Content/Women/Women';
import Subscribe from './client/components/SectionSub/Subscribe';
import {Context} from './index';
import {observer} from 'mobx-react-lite'

function App() {
  const {store} = useContext(Context)
  useEffect ( ()=> {
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
})

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
            <Route path="/login" element={ <FormReg />} />
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
export default observer(App) ;
