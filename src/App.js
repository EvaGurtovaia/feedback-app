import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

const App = () => {
  const [feedback, setFeedback] = useState(null);
  return (
    <>
    <Header />
    <div className="App">
      <FeedbackItem />
    
    </div>
    </>
  );
 
}

export default App;
