import "./Header.css";

const Header = ({ text }) => {
  

    return (
        <header className="header">
            <div className="container">
            <h2>{text}</h2>
            </div>
            
        </header>
    );
};

Header.defaultProps = {
    text: "Feedback UI",


};

export default Header;
