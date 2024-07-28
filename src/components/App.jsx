import './App.css';
import { useState } from 'react';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import { getDefaultFieldsState } from './utils';

function App() {
  const [reviews, setReviews] = useState(getDefaultFieldsState);
  const { good, neutral, bad } = reviews;

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setReviews({ good: 0, neutral: 0, bad: 0 });
      localStorage.removeItem('reviews');
    } else {
      const updeatedReviews = {
        ...reviews,
        [feedbackType]: reviews[feedbackType] + 1,
      };

      setReviews(updeatedReviews);

      localStorage.setItem('reviews', JSON.stringify(updeatedReviews));
    }
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 && <Notification />}

      {totalFeedback !== 0 && (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
