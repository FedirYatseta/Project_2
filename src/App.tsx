
import './client/css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FC, useContext, useEffect } from 'react'
import Header from './client/components/Header/Header';
import Footer from './client/components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FormReg from "./client/components/Header/Nav/Topbar/Register/Reg"
import Content from './client/components/Content/Content';
import NotFound from './client/components/NotFound/NotFound';
import Women from './client/components/Content/Women/Women';
import Subscribe from './client/components/SectionSub/Subscribe';
import { Context } from './index';
import { observer } from 'mobx-react-lite'
import React from 'react';
import Account from './client/components/Account/Account';
import Invoice from './client/components/Account/MyProfile/Invoice';

const App: FC = () => {
  const { store } = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])
  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="content-body">
          <Routes>
            <Route path="content" element={<Content />} />
            <Route path="women" element={<Women />} />
            <Route path="account" element={<Account />} >
              <Route
                index
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":elementId" element={<Invoice />} />
            </Route>
          </Routes>
        </div>
        <Subscribe />
        <Footer />
      </div>

    </Router>
  );
}
export default observer(App);
