import React, { useEffect, useState } from 'react';
import { getMovieCast } from 'services/apiservices';
import style from './Cast.module.scss';
import { BASE_URL_IMG_ACTOR } from 'utils/constance';
import image from 'images.jpg';
import NotFoundPage from 'pages/notFoundPage/NotFoundPage';

export default function Cast({ movieId }) {
  const [persons, setPerson] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(setPerson)
      .catch(error => error.message);
  }, [movieId]);

  if (!Array.isArray(persons) || persons.length === 0) {
    return <NotFoundPage />;
  }
  return (
    <>
      <div className={style.wrapper}>
        {persons?.map(person => (
          <div className={style.block} key={person.id}>
            <img
              src={
                person.profile_path
                  ? `${BASE_URL_IMG_ACTOR}${person.profile_path}`
                  : image
              }
              alt="actorFoto"
            />
            <p>{person.name}</p>
            <p className={style.name}>
              <strong>Character:</strong> <span>{person.character}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
