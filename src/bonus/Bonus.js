import { useState } from "react";

function Bonus() {

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [showLetter, setShowLetter] = useState(0);

    function nextLetter() {
        if (showLetter == letters.length -1) {
            setShowLetter(0);
        } else {
            setShowLetter(showLetter + 1);
        }
    }

    return (
        <section id="bonus">
            <h1>{letters[showLetter]}</h1>
            <button onClick={nextLetter}>NEXT LETTER</button>
        </section>
    );
}

export default Bonus;