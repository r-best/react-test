import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Content, Footer } from './containers';
import { FullImgView } from './components';

import './App.css';
import { SecretMenu } from './components/secret-menu/SecretMenu';

function App() {
  useEffect(() => {
    document.title = "Bobby Best's Cool Project Website :)"

    // Set Konami code combo to open secret settings menu
    const COMBO = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a', 'enter']
    var timer = null
    var comboCount = 0
    var breakCombo = () => {comboCount = 0}
    document.addEventListener('keydown', e => {
      console.log(e.key, comboCount)
      clearTimeout(timer)
      if(COMBO[comboCount] === e.key.toLocaleLowerCase()){
        comboCount++
        if(comboCount >= COMBO.length){
          window.toggleSecretMenu()
          breakCombo()
        } else {
          timer = setTimeout(breakCombo, 1000)
        }
      } else {
        breakCombo()
      }
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      
      <SecretMenu />

      <FullImgView />

      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        pauseOnHover={false}
        theme="dark" />
    </div>
  );
}

export default App;
