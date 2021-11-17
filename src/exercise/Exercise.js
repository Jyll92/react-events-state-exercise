import { useState } from 'react';

function Exercise() {

    const [num, setNum] = useState(1);

    const addNum = () => setNum(num + 1);

    return (
        <section id="Exercise">
            <button onClick={() => alert(`Congrats! You have clicked the button.`)}>CLICK HERE</button>
            <button onClick={addNum}>STATE</button>
            <h1>{num}</h1>
        </section>
    );
}

export default Exercise;


// 2d. Below useState function, create a function called addNum that adds one to the value of the num variable and sets that as the new state value for the num variable by using the setNum function inside of the addNum function

// 2e. Use the "onClick" React event listener on the "STATE" button and set the value for the "onClick" React event listener to the addNum function (HINT: Remember to use brackets {})

// 2f. Below the "STATE" button, create another h1 with the num variable set as the content/text inside the h1 (HINT: Remember to use brackets {}) (NOTE: If is done correctly, then in Chrome the value of the h1 should start at 1 and go up by 1 every time the "STATE" button is clicked)
