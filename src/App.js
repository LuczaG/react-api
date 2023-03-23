import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './components/Coin';

function App() {

  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins")
      .then(res => setCoinList(res.data.coins))
  }, []);

  const searchedCoin = coinList.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  })
  

  return (
    <div className="App">
      <div className="crypto-header">
        <h1>Kryptovaluta kereső</h1>
        <input type="text" placeholder='Bitcoin...' onChange={(e) => setSearch
        (e.target.value)}/>
      </div>

      <div className="crypto-container">
      {

        searchedCoin.map(coin => {
          return <Coin name={coin.name} icon={coin.icon} price={coin.price} ikon={coin.symbol}></Coin>
        })

      }


      </div>
    </div>
  );
}

export default App;
