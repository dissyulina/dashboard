import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/Header';
import SideBar from './components/SideBar';

import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Header/>
      <SideBar/>
      <Main />
      <Footer/>
      <BackToTop/>
    </>
    
  );
}

export default App;
