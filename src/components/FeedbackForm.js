import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelector from "./RatingSelector";
import "./FeedbackForm.css";

const FeedbackForm = ({ handleAdd }) => {
    const [newFeedback, setNewFeedback] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleTextChange = (e) => {
        if (newFeedback === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (newFeedback !== "" && newFeedback.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Feedback must be at least 10 characters");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setNewFeedback(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newFeedback.trim().length > 10) {
            const addedFeedback = {
                newFeedback: newFeedback,
                rating: rating,
                id: uuidv4(),
            };
            handleAdd(addedFeedback);
            setNewFeedback(" ");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelector select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={newFeedback}
                    ></input>
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
