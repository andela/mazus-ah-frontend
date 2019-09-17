// import React from 'react';
// import NewArticle from './NewArticle';

// Describe('Testing new article page', () => {
//   it('should render new article page without crashing the app')
// });
// import { BrowserRouter as Router } from 'react-router-dom';
// import configureMockStore from 'redux-mock-store';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';


// const initialState = {
//   newArticle: {
//     article: {},
//     loading: false,
//     error: {},
//   },
// };
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const store = mockStore(initialState);

// describe('Testing New Article Page', () => {
//   it('should render New Article Page correctly', () => {
//     const component = mount(<NewArticle />);
//     const titleInput = component.find('#article_title');
//     expect((titleInput).length).toEqual(1);
//   });
//   it('should call onchange funciton on title input field', () => {
//     const component = mount(<NewArticle />);
//     const titleInput = component.find('#article_title');
//     titleInput.simulate('change', {
//       persist: () => { },
//       target: {
//         value: 'Siberian Tiger',
//       },
//     });
//     expect(titleInput.html()).toMatch('Siberian Tiger');
//   });
// it('should call show funciton when Done button is clicked', () => {
//   const show = jest.fn();
//   const component = mount(
//     <Provider store={store}>
//       <Router>
//         <NewArticle />
//       </Router>
//     </Provider>,
//   );
//   const titleInput = component.find('#article_title');
//   const DoneButton = component.find('.done');
//   titleInput.simulate('change', {
//     persist: () => { },
//     target: {
//       value: 'Siberian Tiger',
//     },
//   });
//   DoneButton.simulate('click');
//   expect(show).toHaveBeenCalledTimes(1);
// });
// });
