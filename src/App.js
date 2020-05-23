import React from 'react';
//Styles CSS
import './styles.css'
//Components
import Header from './components/Header/index';
import Footer from './components/Footer'

import Main from './pages/main/index'

function App(){
  return(
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;