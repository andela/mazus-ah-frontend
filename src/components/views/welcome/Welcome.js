import React from 'react';
import { Link } from 'react-router-dom';

const slug = 'building-apis-with-nodejs-48458493';
const Welcome = () => (
  <div>
    <h1>Hello Mazus</h1>
    <Link to={`/article/${slug}`}>View Sample Article</Link>
  </div>
);

export default Welcome;
