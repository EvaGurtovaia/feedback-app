import "./FeedbackStats.css";

const FeedbackStats = ({ feedback }) => {
    let aveRating =
        feedback.reduce((prevVal, curVal) => {
            return prevVal + curVal.rating;
        }, 0) / feedback.length;

    aveRating = aveRating.toFixed(1).replace(/[.,]0$/, "");

    return (
        <div className="feedback-stats">
            {" "}
            <h4>{feedback.length} reviews</h4>
            <h4>Average rating: {isNaN(aveRating) ? 0 : aveRating}</h4>
        </div>
    );
};

export default FeedbackStats;
