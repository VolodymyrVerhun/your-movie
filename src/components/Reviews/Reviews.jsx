import NotFoundPage from 'pages/notFoundPage/NotFoundPage';
import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/apiservices';
import style from './Reviews.module.scss';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(error => error.message);
  }, [movieId]);

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <div className={style.wrapper}>
      {reviews.map(review => (
        <div className={style.block} key={review.id}>
          <h3>{review.author}</h3>
          <p className={style.text}> {review.content}</p>
        </div>
      ))}
    </div>
  );
}
