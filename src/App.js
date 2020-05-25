import React from 'react';
//Styles CSS
import './styles.css'
//Components
import Header from './components/Header/index';
//Page
import Main from './pages/main/index'

function App(){
  return(
    <div className="App">
      <Header />
      <Main />
      
    </div>
  );
}
export default App;