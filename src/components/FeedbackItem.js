import "./FeedbackItem.css";
import Card from "./shared/Card";


const FeedbackItem = ({ item }) => {
    return (
       <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display"></div>
            {item.text}
            </Card>
    );
};

export default FeedbackItem;
