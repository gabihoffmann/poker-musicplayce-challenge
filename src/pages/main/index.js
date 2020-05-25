import React, { useState, useEffect} from 'react';

import './styles.css';
import Button from 'react-bootstrap/Button';

import Player from '../../components/Player';

import {getDeck, pokerHands} from '../../service/deck';
import {getWinner} from '../../service/rules';

function Main(){
    const [deck , setDeck] = useState([]);
    const [playOne, setPlayOne] = useState([]);
    const [playTwo, setPlayTwo] = useState([]);
    const [winner , setWiner] = useState(null);
    
    useEffect(()=> {
        getDeck().then(setDeck);
    },[]);
    
    function handleClick(){
        setWiner(null);
        setPlayOne([]);
        setPlayTwo([]);

       setTimeout(()=> {
        const data = pokerHands(deck)
        setDeck(data.deck);
        setPlayOne(data.playOne);
        setPlayTwo(data.playTwo); }, 1000);
    }

    useEffect(()=> {
        setWiner(getWinner(playOne,playTwo))
    }, [playTwo, playOne])

    useEffect(()=> {
        
    }, [winner])

    return(
        <div className="main-poker">
            <div className="winner-poker">
                {winner!== null && <h1>Vencendor Jogador {winner}</h1>}</div>
            <div className="players-poker">
                <Player player={playOne} title={"Um"} />
                <Player player={playTwo} title={"Dois"} />
              
                    <Button variant="secondary"
                    onClick={handleClick}>Jogar</Button>
               
            </div>
            
        </div>
    );
    
}


export default Main;