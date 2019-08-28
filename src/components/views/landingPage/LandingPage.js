import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../../common/landingPage/card/cards';
import TagsDiv from '../../common/landingPage/tagsDiv/TagsDiv';

const LandingPage = () => (
  <div>
    <Card />
    <Router>
      <TagsDiv />
    </Router>
  </div>
);

export default LandingPage;
