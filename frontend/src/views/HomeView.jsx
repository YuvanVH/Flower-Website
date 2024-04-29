// src/views/HomeView.jsx
import '../styles/Home.css';
import QuizBanner from '../components/QuizBanner';

function HomeView() {
  return (
    <>
      <div className="homeContainer">
        {/* Other content of the home view */}
        <section className='intro-film'>
          <div className="video-container">
            <video autoPlay muted loop>
              <source src="/src/assets/pictures/PinkFlowersVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <div className="text">
                {/* <img id="FloretteLogo" src="/src/assets/icons/FloretteLogo.png" alt="Le Florette logo" /> */}
                Le Florette
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='containerHomeIntro'>
            <h3>Welcome to La Florette</h3>
            <p>Your ultimate destination for all things floral and botanical! Dive into a world of blooming wonders, where every petal tells a story and every leaf whispers secrets of nature's beauty. Whether you're a seasoned gardener, a budding enthusiast, or simply someone who appreciates the splendor of flowers, you've come to the right place.</p>

            <img id="orchidPoster" src="src/assets/pictures/artRoseGuy.jpeg" alt="Guy Roses Poster" />
          </div>
        </section>
        <section>
          <QuizBanner />
        </section>
        <section>
          <img id="orchidPoster" src="src/assets/pictures/orchidPoster.jpeg" alt="orchid poster" />
        </section>
        <section className='containerHome1'>
          <div className='containerLeft1'></div>
          <div className='containerRight1'>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomeView
