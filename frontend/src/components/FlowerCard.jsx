// src/components/FlowerCard.jsx
import PropTypes from 'prop-types';
import '../styles/FlowerCard.css';

const FlowerCard = ({ flower }) => {
  return (
    <div className="flower-card">
      <img src={`/src/assets/picturesApi/${flower.image}`} alt={flower.name} className="flower-image" />
      <div className="flower-info">
        <h2 className="flower-name">{flower.name}</h2>
        <p className="flower-latin"><i>{flower.latinName}</i></p>
        <p className="flower-description">{flower.description}</p>
      </div>
    </div>
  );
};

FlowerCard.propTypes = {
  flower: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    latinName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlowerCard;
