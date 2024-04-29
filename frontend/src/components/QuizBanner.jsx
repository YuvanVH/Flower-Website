// QuizBanner.jsx
import { Link } from 'react-router-dom';
import '../styles/FlowerFacts.css';

function QuizBanner() {
  return (
    <>
      <h1 id="FlowerQuiz">Flower Quiz</h1>
      <h2>NEW!</h2>
      <section className='quizContainer'>
        <div className='quizContainerPic'>
          <Link to="/quiz">
            <img src={'/quizPic.jpeg'} alt="Quiz Pic" />
            <div className="overlay">
              <div className="quizText">
                Take a personality quiz and find what flower matches you!{' '}
                <span className="link">Take the quiz</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default QuizBanner;
