const deckURL = 'https://deckofcardsapi.com/api/deck'
/**
 * Usando a Deck of Cards API, para pegar um deck ordenado de 52 cartas (sem o joker)
 *  e suas respectivas imagens
 */
export async function getDeck(){
     const deckId = await getNewDeckApi();
     const deck = await getCards(deckId);

     return shuffleDeck(deck) ? deck : [];
}

// Solicitando um deck para API
async function getNewDeckApi(){
    const response = await fetch(`${deckURL}/new`);
    const fulldeck = await response.json().then(value => value.deck_id);

    return fulldeck;
}

//Solicitando as cartas do deck
async function getCards(id){
    const response = await fetch(`${deckURL}/${id}/draw/?count=52`);
    const cards = response.json().then((value) => {
        return value.cards;
    });

    return cards;
 }

//Embaralhar o deck
export function shuffleDeck(deck){
    return  deck.sort(() => Math.random() - 0.5)
}

export function pokerHands(deck){
    const playOne = deck.slice(0,5);
    const playTwo = deck.slice(5,10);
    deck = shuffleDeck(deck)
    return { "playOne": playOne, "playTwo": playTwo, "deck" : deck}
}
