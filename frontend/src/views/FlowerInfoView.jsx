// /src/views/FlowerInfoView.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/FlowerInfo.css';

const FlowerInfoView = () => {
  // State för att lagra den valda blomman och id från URL:en
  const [flower, setFlower] = useState(null);
  const { id } = useParams(); // Använd useParams-hook för att hämta id från URL:en

  // useEffect-hook för att hämta data för den valda blomman baserat på id
  useEffect(() => {
    // Funktion för att hämtaa blomdata från JSON-filen
    const fetchFlower = async () => {
      try {
        const response = await fetch(`http://localhost:5001/flowers/${id}`);
        // const response = await fetch('/flowers.json'); skas användas i backend
        // Fetcha JSON-data från filen 'flowers.json'
        const data = await response.json(); // Konvertera svaret till JSON-format

        // Konvertera strängar i JSON till arrayer (för den ligger i databasen)
        data.colors = JSON.parse(data.colors);
        data.symbolism = JSON.parse(data.symbolism);

        setFlower(data);
        // const selectedFlower = data.find(flower => flower.id === parseInt(id)); // Hitta den valda blomman baserat på id
        // setFlower(selectedFlower); // Uppdatera state med den valda blomman
      } catch (error) {
        console.error('Error fetching flower:', error); // Logga felmeddelande om det uppstår ett fel vid hämtning av data
      }
    };

    fetchFlower(); // Kör funktionen för att hämta data när komponenten monteras

    // Funktion som körs när komponenten "demonteras" för att undvika "minnesläckor"
    return () => {
      // Inget att rensa upp här i detta fall
    };
  }, [id]); // Uppdatera effekten när id ändras i URL:en

  // Visa laddningsmeddelande om blomman inte har hämtats ännu
  if (!flower) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={`/src/assets/picturesApi/${flower.image}`} alt={flower.name} className="flower-image-info" />
      <h1>{flower.name}</h1>

      <p className='flower-description-info'>{flower.description}</p>

      <section className='small-info-container'>
        <p className="flower-latin-info"><strong>Latin Name </strong>{flower.latinName}</p>
        <p className="flower-symbolism-info"><strong>Symbolism </strong> {flower.symbolism.join(', ')}</p>
        <p className="flower-color-info"><strong>Color variants </strong> {flower.colors.join(', ')}</p>
      </section>

      <div className='flower-info-container'>
        <p className="flower-fragrance-info"><strong>Fragrance </strong> {flower.fragrance}</p>
        <p className="flower-properties-info">
          <strong>Properties </strong> {flower.properties}
        </p>
        <p className="flower-history-info"><strong>History </strong> {flower.history}</p>
        <p className="flower-story-info"><strong>Lore/Story </strong> {flower.story}</p>
      </div>
      <img src={`/src/assets/picturesApi/${flower.image}`} alt={flower.name} className="flower-image-info-bottom" />
    </div>
  );
};

export default FlowerInfoView;
