import React, { useState,  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import blockchain from '../assets/blockchain.png';
import send from '../assets/send.png';
import mine from '../assets/mine.png';
import wallet from '../assets/wallet.png';
import logo from '../assets/logo.png';
import bitcon from '../assets/bitcon.jpg';
function App() {
  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/wallet/info`)
      .then(response => response.json())
      .then(json => setWalletInfo(json));
  }, []);

  const { adress, balance } = walletInfo;
   
  return(
    <div className="App">
      <img className="logo" src={logo} alt="KSH-Heerbrugg Logo" /> 
      <h3>KSH-COIN</h3>
      <br />
      
      <ul>
        <li>
          <a>
            <Link to="/blockchain">
              <div class="icon">
                <img class="icons" src={blockchain} alt="Blockchain Icon"/>
                <img class="icons" src={blockchain} alt="Blockchain Icon"/>
              </div>
              <div class="text"><span data-text="Blockchain">Blockchain</span></div>
            </Link>
          </a>
        </li>

        <li>
          <a>
             <Link to="/conduct-transaction"> 
              <div class="icon">
                <img class="icons" src={send} alt="Send Icon"/>
                <img class="icons" src={send} alt="Send Icon"/>
              </div>
              <div class="text"><span data-text="Send">Send</span></div>
            </Link>
          </a>
        </li>

        <li>
          <a>
            <Link to="/transaction-pool">
              <div class="icon">
                <img class="icons" src={mine} alt="Mine Icon"/>
                <img class="icons" src={mine} alt="Mine Icon"/>
              </div>
              <div class="text"><span data-text="Mine">Mine</span></div>
            </Link>
          </a>
        </li>

        <li>
          <a>
            <Link to="/wallet">
              <div class="icon">
                <img class="icons" src={wallet} alt="Wallet Icon"/>
                <img class="icons" src={wallet} alt="Wallet Icon"/>
              </div>
              <div class="text"><span data-text="Wallet">Wallet</span></div>
            </Link>
          </a>
        </li>
      </ul>  
      <br />
      <div className="background">

      </div>
      
      <div className="WalletInfo">
        <div>Addresse: {walletInfo.address}</div>
        <div>Balance: {walletInfo.balance}</div>
      </div>
    </div>

  );
}

export default App;
