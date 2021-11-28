import React, { useState,  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import send from '../assets/send.png';


function Wallet() {
    const [walletInfo, setWalletInfo] = useState({});
  
    useEffect(() => {
      fetch(`${API_BASE_URL}/wallet/info`)
        .then(response => response.json())
        .then(json => setWalletInfo(json));
    }, []);
  
    const { adress, balance } = walletInfo;
    return(

        <div className="WalletInfo">
            
            
            <div className="infos">Addresse: {walletInfo.address}</div>
            <div className="infos">Balance: {walletInfo.balance}</div>
        
        <div class="App">
                <ul>
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
                </ul>
            </div>
        </div>
        

         )
    };
export default Wallet;