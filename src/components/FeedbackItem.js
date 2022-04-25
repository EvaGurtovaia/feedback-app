import { FaTimes } from "react-icons/fa";
import "./FeedbackItem.css";
import Card from "./shared/Card";

const FeedbackItem = ({ item, handleDelete }) => {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display"></div>
            {item.text}
        </Card>
    );
};

export default FeedbackItem;
