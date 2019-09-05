import React from 'react';
import landingPage from './LandingPage';

const LandingPage = landingPage;

describe('Landing page test', () => {
  it('should render landing page successfully', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find('.landingPage-container').length).toEqual(1);
  });
});
