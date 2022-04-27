import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import "./FeedbackForm.css";

const FeedbackForm = () => {
    const [newFeedback, setNewFeedback] = useState("");

    const handleTextChange = (e) => {
        setNewFeedback(e.target.value);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={newFeedback}
                    ></input>
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Card>
    );
};

export default FeedbackForm;
