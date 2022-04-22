import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData);
    return (
        <>
            <Header />
            <div className="App">
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    );
};

export default App;
