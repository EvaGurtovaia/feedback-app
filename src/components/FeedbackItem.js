import "./FeedbackItem.css";
import { useState } from "react";

const FeedbackItem = () => {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState("Some text");
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display"></div>
            {text}
        </div>
    );
};

export default FeedbackItem;
