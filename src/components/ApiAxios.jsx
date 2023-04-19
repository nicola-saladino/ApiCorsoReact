import axios from 'axios';
import { useState, useEffect } from 'react';

function ApiAxios() {
  const [apiData, setApiResponse] = useState();
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    axios.all([
      axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${selectedCrypto}&tsyms=USD,JPY,EUR`),
      axios.get('https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining')
    ])
      .then(axios.spread((cryptoResponse, newsResponse) => {
        setApiResponse({ crypto: cryptoResponse.data, news: newsResponse.data.Data });
      }))
      .catch(error => {
        console.error(error);
      });
  }, [selectedCrypto]);

  return (
    <div>
      <label>
        Seleziona una criptovaluta:
        <select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Ethereum</option>
          <option value="LTC">Litecoin</option>
        </select>
      </label>

      <button onClick={() => setBtn(!btn)}>
        {btn ? 'Nascondi crypto' : 'Mostra crypto'}
      </button>
      {btn && apiData && (
        <div>
          <div key={selectedCrypto}>
            <h2>{selectedCrypto}</h2>
            <p>USD: {apiData.crypto.USD}</p>
            <p>JPY: {apiData.crypto.JPY}</p>
            <p>EUR: {apiData.crypto.EUR}</p>
          </div>
          <div>
            <h2>News</h2>
            {apiData.news.map(item => (
              <div key={item.id}>
                <h2>Title: {item.title}</h2>
                <p>Article: {item.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ApiAxios;
