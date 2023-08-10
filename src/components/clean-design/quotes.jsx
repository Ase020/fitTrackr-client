import { useState, useEffect } from "react";
import { quotes } from "../../constants";



const Quotes = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setQuoteIndex((quoteIndex + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [quoteIndex]);

    return (
        <div>
            <p>{quotes[quoteIndex]}</p>
        </div>
    );
};

export default Quotes;