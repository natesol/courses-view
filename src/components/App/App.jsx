import { useState } from 'react';
import './App.css';

import CourseTree from '../CourseTree/CourseTree';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header className='App-header'>
                <p>Dean's Courses Tree</p>
                <button>Click me</button>
            </header>
            <CourseTree courseName={'Course 1'} hedva={0}>
                <p>asfasf</p>
            </CourseTree>
        </>
    );
}

export default App;
