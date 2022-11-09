import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Content, Footer } from './containers';

import './App.css';

function App() {
  useEffect(() => {
    document.title = "bobbybest.dev"
  })
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        pauseOnHover={false}
        theme="dark" />
    </div>
  );
}

export default App;
