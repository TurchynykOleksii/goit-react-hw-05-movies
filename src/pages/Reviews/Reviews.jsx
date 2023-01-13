import { getReviewsId } from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    getReviewsId(filmId).then(setReviews).catch(console.log);
  }, [filmId]);

  if (!reviews) {
    return;
  }

  return reviews.length > 0 ? (
    
    <>
      <div className="wrapper">
        <ul className={css.review}>
          {reviews.map(({ author, content, id }) => (
            <div key={id} className={css.info}>
              <p>
                <b>Author name:</b> {author}
              </p>
              <p>
                <b>Review:</b> <i>{content}</i>
              </p>
            </div>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <p>No reviews for this movie</p>
  );
}
