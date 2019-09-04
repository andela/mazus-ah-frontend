import React from 'react';
import Cards from './cards';
import formatDate from '../../../../utils/formatDate';

describe('Testing date formatting function', () => {
  it('should return a month-day time format', () => {
    expect(formatDate('2019-08-29T16:04:58.809Z')).toBe('Aug 4');
  });
});

const imageUrl = 'https://res.cloudinary.com/mazus/image/upload/v1567086471/Spicy-Vegan-Roasted-Vegetable-Quinoa-Salad-from-HeatherChristo.com__xzonxt.jpg';
const articleTitle = 'Vegan Nutrition';
const publishedAt = '2019-08-29T16:04:58.809Z';
const timeTakenToRead = 5;
const authorDetails = {
  firstName: 'John',
  lastName: 'Kamali',
  profile: {
    avatar: 'https://skyhigh/uploads/my-avatar.jpg',
  },
};
describe('<Cards /> Component', () => {
  it('should render component without crashing the app', () => {
    const wrapper = shallow(<Cards
      thumbnail={imageUrl}
      title={articleTitle}
      createdAt={publishedAt}
      readTime={timeTakenToRead}
      author={authorDetails}
    />);
    expect(wrapper.find('.article-card').length).toEqual(1);
    expect(wrapper.find('p').at(0).text()).toEqual(articleTitle);
    expect(wrapper.find('p').at(1).text()).toEqual(`${authorDetails.firstName} ${authorDetails.lastName}`);
  });
});
