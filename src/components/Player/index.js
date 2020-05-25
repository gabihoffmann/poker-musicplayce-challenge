import React from 'react'
import './styles.css'

import cardback from '../../assets/cardback2.png'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Player(props){
    const {player ,title } = props;
    
    if(player.length === 0){
        return (
            <div className="player-container">
            <Card.Title className="text-center">Jogador {title}</Card.Title>
            <CardGroup>
                <Card.Img variant="top" src={cardback} />
                <Card.Img variant="top" src={cardback} />
                <Card.Img variant="top" src={cardback} />
                <Card.Img variant="top" src={cardback} />
                <Card.Img variant="top" src={cardback} />
            </CardGroup>   
        </div>  
        )
    }

    return(
        <div className="player-container">
            <Card.Title className="text-center">Jogador {title}</Card.Title>
            <CardGroup>
               { player.map((card)=>(
                   <Card.Img variant="top" src={card.image} key={card.code} />
               ))}
            </CardGroup>
        </div>

    )
}