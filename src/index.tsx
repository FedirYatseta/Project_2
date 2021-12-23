import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import  Store  from './client/store/store';
import { BrowserRouter } from 'react-router-dom';

interface State{
    store: Store,
}

const store = new Store();

export const Context = createContext<State>(
    {
        store,
    }
)

ReactDOM.render(
  
     <Context.Provider value={{store}}>
         <App />
     </Context.Provider>
 
  ,  document.getElementById('root')
);
