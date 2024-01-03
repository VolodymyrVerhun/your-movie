import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>
        404 Not Found, go to <Link to="/">Home</Link>
      </h1>
    </div>
  );
}
