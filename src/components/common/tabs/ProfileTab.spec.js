import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileTab from './ProfileTab';

describe('<ProfileTab /> Component', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    window.domNode = div;
    document.body.appendChild(div);
  });

  it('should render the Profile Tab component without crashing', () => {
    const profile = {
      profile: {
        id: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407',
        match: { params: { userId: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407' } },
        loading: false,
      },
      articles: [],
    };
    const wrapper = mount(
      <Router>
        <ProfileTab {...profile} />
      </Router>,
      { attachTo: window.domNode },
    );
    expect(wrapper.find('button').length).toEqual(3);
    expect(wrapper.find('.profileStories').length).toEqual(2);
  });

  it('should render the Profile Tab Component with an authors articles', () => {
    const profile = {
      profile: {
        id: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407',
        match: { params: { userId: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407' } },
        loading: false,
      },
      articles: [
        {
          id: '8a7672e7-bd4b-4a56-83af-82b54e3579ad',
          title: 'Hold Your Space: Lessons from Living on the Block',
          slug: 'hold-your-space-lessons-from-living-on-the-block-1568066081197',
          body: 'stuff',
          description: 'Learn a thing or two about living on the block',
          isPaid: false,
          ratings: null,
          likes: 0,
          dislikes: 0,
          status: 'published',
          thumbnail: 'https://miro.medium.com/max/3840/1*AdjypYCYbPb-uWsYEf_9nA.jpeg',
          reports: 0,
          userId: 'fdfe8617-208d-4b87-a000-5d6840786ab8',
          readTime: 5,
          readCount: 3,
          createdAt: '2019-09-10T08:39:16.771Z',
          updatedAt: '2019-09-12T10:32:09.458Z',
          author: {
            id: 'fdfe8617-208d-4b87-a000-5d6840786ab8',
            firstName: 'Mike',
            lastName: 'Mike',
            email: 'mikemike@test.com',
            profile: {
              id: 'fdfe8317-208d-4b87-a000-5d6840186ab8',
              userId: 'fdfe8617-208d-4b87-a000-5d6840786ab8',
              bio: 'i think we all loving coding and little faffing',
              avatar: 'http://avatars.design/wp-content/uploads/2016/09/avatar1b.jpg',
              createdAt: '2019-09-10T08:39:16.844Z',
              updatedAt: '2019-09-10T08:39:16.844Z',
            },
          },
        },
      ],
    };
    const wrapper = mount(
      <Router>
        <ProfileTab {...profile} />
      </Router>,
      { attachTo: window.domNode },
    );
    expect(wrapper.find('button').length).toEqual(0);
    expect(wrapper.find('.search_input_wrap').length).toEqual(0);
  });

  it('should render the loading component when the profile is loading', () => {
    const profile = {
      profile: {
        id: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407',
        match: { params: { userId: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407' } },
        loading: true,
      },
      articles: [],
    };
    const wrapper = mount(
      <Router>
        <ProfileTab {...profile} />
      </Router>,
      { attachTo: window.domNode },
    );
    expect(wrapper.find('button').length).toEqual(0);
    expect(wrapper.find('.search_input_wrap').length).toEqual(0);
  });
});
