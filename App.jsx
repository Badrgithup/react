import React, { useState } from 'react';
import PrBar from './PrBar';
function App() {
    const [progress, setProgress] = useState(0);

    const updateProgress = () => {
        if (progress < 100) {
            setProgress(progress + 10);
        } else {
            setProgress(0);
        }
    };

    return (
        <div>
            <PrBar  progress={progress} />
            <button onClick={updateProgress}>
                Increase Progress
            </button>
        </div>
    );
}
export default App;
