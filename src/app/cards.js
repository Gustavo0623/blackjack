const Cards = ({type, symbol}) => {
    return (
        <div className="flex flex-col justify-center w-1/4">
            { type === 'clubs' && (
                <>
                    <p className="m-auto font-bold">{symbol}</p>
                    <img src="/clubs-icon.svg" alt="clubs icon"/>   
                </>
            )}
            { type === 'diamonds' && (
                <>
                <p className="m-auto font-bold">{symbol}</p>
                <img src="/diamond-icon.svg" alt="clubs icon"/>
                </>
            )}
            { type === 'hearts' && (
                <>
                <p className="m-auto font-bold">{symbol}</p>
                <img src="/hearts-icon.svg" alt="clubs icon"/>
                </>
            )}
            { type === 'spades' && (
                <>
                <p className="m-auto font-bold">{symbol}</p>
                <img src="/spades-icon.svg" alt="clubs icon"/>
                </>
            )}
        </div>
    )
}

export default Cards