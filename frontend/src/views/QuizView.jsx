// src/views/QuizView.jsx
import Quiz from '../components/QuizContent.jsx';
import '../styles/Quiz.css';

function QuizView() {
  return (
    <>
      <h1>Your Personality Flower QUIZ!</h1>
      <div className="quizViewContainer">
        <Quiz />
      </div>
    </>
  );
}

export default QuizView;
