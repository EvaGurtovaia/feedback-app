import "./Header.css";

const Header = ({ text }) => {
  

    return (
        <header className="header">
            <div className="container"></div>
            <h2>{text}</h2>
        </header>
    );
};

Header.defaultProps = {
    text: "Feedback UI",


};

export default Header;
