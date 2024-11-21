import Cards from "../cards"
export default function OriginalBlackjack () {
    const cardTypes = ['spades', 'clubs', 'diamonds', 'hearts']
    const cardSymbols = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const deck = []
    cardTypes.forEach(type => {
        cardSymbols.forEach(symbol => {
            const card = {
                cardType : type,
                cardSymbol : symbol
            }
            deck.push(card)
        })        
    });
    console.log(deck)
    return (
        <main>
            <h1>Double Deck Blackjack</h1>
            {deck.map((bjCard, cardIndex) => (
                <Cards type={bjCard.cardType} symbol={bjCard.cardSymbol} key={cardIndex}/>
            ))}
        </main>
    )
}