import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsRedux';

const Favorite = () => {
  const cards = useSelector(getFavoriteCard);
  if(!cards) 
  return ( <div className={styles.no_favorite_cards}>NO FAVORITE CARDS!</div>);
    return (
        <div className={styles.favorite}>
        <PageTitle>FAVORITE</PageTitle>
          <ul className={styles.card}>
            {cards.map(card => (<Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />))}
          </ul>
        </div>
    );
};


export default Favorite;