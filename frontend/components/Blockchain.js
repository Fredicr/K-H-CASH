import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { API_BASE_URL} from '../config';
import Block from './Block';
import home from '../assets/home.png'

const PAGE_RANGE = 3;


function Blockchain() {
  const [blockchain, setBlockchain] = useState([]);
  const [blockchainLength, setBlockchainLength] = useState(0);

  const fetchBlockchainPage = ({ start, end }) => {
    fetch(`${API_BASE_URL}/blockchain/range?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(json => setBlockchain(json));
  }

  useEffect(() => {
    fetch(`${API_BASE_URL}/blockchain`)
    // .then(response => response.json())
    // .then(json => setBlockchain(json));
    fetchBlockchainPage({ start: 0, end: PAGE_RANGE });

    fetch(`${API_BASE_URL}/blockchain/length`)
      .then(response => response.json())
      .then(json => setBlockchainLength(json));
  }, []);

  const buttonNumbers = [];
  for (let i=0; i<blockchainLength/PAGE_RANGE; i++) {
    buttonNumbers.push(i);
  }

  //
  // return (
  //  <div className="Blockchain">
  //    <h3>Blockchain</h3>
  //     <div>
  //       {
  //         blockchain.map(block => (
  //           <div key={block.hash}>{JSON.stringify(block)}</div>
  //         ))
  //       }
  //     </div>
  //   </div>
  // )

    return (
     <div className="Blockchain">
      <ul>
        <li>
            <a>
              <Link to="/">
                <div class="icon">
                  <img class="icons" src={home} alt="Home Icon"/>
                  <img class="icons" src={home} alt="Home Icon"/>
                </div>
                <div class="text"><span data-text="Home">Home</span></div>
              </Link>
            </a>
          </li>
        </ul>  
      <h3>Blockchain of KSH-Coin</h3>
        <div>
          {
            blockchain.map(block => <Block key={block.hash} block={block} />)
          }
        </div>
        <div>
          {
            buttonNumbers.map(number => {
              const start = number * PAGE_RANGE;
              const end = (number+1) * PAGE_RANGE;

              return (
                <span key={number} onClick={() => fetchBlockchainPage({ start, end })}>
                <Button size="sm" variant="danger">
                  {number+1}
                </Button>{' '}
                </span>
              )
            })
          }
        </div>
      </div>
    )
}

export default Blockchain;
