import "./FeedbackItem.css";

const FeedbackItem = ({ item }) => {
    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display"></div>
            {item.text}
        </div>
    );
};

export default FeedbackItem;
