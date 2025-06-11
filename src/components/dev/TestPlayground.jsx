import { TEST } from '../../firebase/firebase.js'  
import './TestPlayground.css';

const TestPlayground = () => {

    const handleClick = () => {
        TEST();
    }

    return (
        <input type="button" onClick={() => handleClick()}/>
    );
};

export default TestPlayground;