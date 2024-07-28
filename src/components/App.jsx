import './App.css';
import { useState, useEffect } from 'react';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(() => {
    const isLocalStorageHasData = Boolean(localStorage.getItem('reviews'));

    if (isLocalStorageHasData) {
      const data = localStorage.getItem('reviews');
      return JSON.parse(data);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  useEffect(() => {
    if (totalFeedback !== 0) {
      const data = JSON.stringify(reviews);
      console.log(data);
      localStorage.setItem('reviews', data);
    }
  }, [reviews, totalFeedback]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setReviews({ good: 0, neutral: 0, bad: 0 });
      localStorage.removeItem('reviews');
    } else {
      setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
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
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
