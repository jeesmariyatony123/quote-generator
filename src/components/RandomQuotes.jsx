import React, { useState } from 'react'

const RandomQuotes = () => {

    let quotes = []

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json()
    }


    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(select)
    }


    loadQuotes()

    return (
        <>
            <div className='container '>
                <div className="quote">{quote.text}</div>
                <div className="author">{quote.author.split(',')[0]}</div>

                <div>
                    <div className="bottom">
                        {/* <div className="author">{quote.author.split(',')[0]}</div> */}
                        <br />
                    </div>
                    <div className="line"></div>

                    <button onClick={() => { random() }} className='icons'>
                        <i className="fa-solid fa-arrows-rotate"></i> Generate Quotes

                    </button>

                </div>
            </div>
        </>
    )
}

export default RandomQuotes