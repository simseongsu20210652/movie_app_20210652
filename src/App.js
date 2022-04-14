import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
    <h2>I like {name} </h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchis',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.1store.io%2FofficialProductImage%2F1587198787425-0712162682417814.png&f=1&nofb=1',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmp-seoul-image-production-s3.mangoplate.com%2Fmango_pick%2Fuker6u9xhkr1m8.jpg&f=1&nofb=1',
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frgo4.com%2Ffiles%2Fattach%2Fimages%2F2651950%2F417%2F385%2F011%2F603b6c64a737ea2f484f07b98b5b956b.jpg&f=1&nofb=1',
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2116093F58367AE114E6CB&f=1&nofb=1',
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2019%2F02%2F04%2F5b51bc5c37041914f8f65bf19a8883df1.jpg&f=1&nofb=1',
  },
];

function App() {
  return (
  <div>
    {foodILike.map(dish => 
    <Food key={dish.name} name={dish.name} picture={dish.image} rating={dish.rating} />
    )}
    </div>
  );
}

export default App;
