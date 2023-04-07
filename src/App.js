import './App.css';
import Nav from './components/nav/Nav'
import Content from './components/content/Content'
import Header from './components/header/Header'
import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'eedd95c9a79ac830021a89557168c433', 
};



function App(){
  return(
    <div>
      <Nav/>
      <Header/>
      <Content/>
    </div>
  )
}

export default App;
