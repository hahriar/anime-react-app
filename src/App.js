import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Results></Results>
    </div>
  );
}
function Results(){
  const [results , setResults] = useState([]);
  useEffect( () =>{
    fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
    .then(res => res.json())
    .then(data => setResults(data.results))
  }, [])
  return(
    <div>
      <h1>Rest Anime List</h1>
      <h4> Anime Available: {results.length}</h4>
      <div  className='container-row'>
      {
        results.map(result => <Result title={result.title} cover={result.image_url} rate={result.rated} about={result.synopsis}></Result>)
      }
      </div>
    </div>
  )
}

function Result(props){
  //console.log(props)
  return(
    <div>
      <img src={props.cover} alt="" />
        <h2>{props.title}</h2>
        <p>{props.rate}</p>
        <p><small>About: {props.about}</small></p>
        </div>

  )
}

export default App;
