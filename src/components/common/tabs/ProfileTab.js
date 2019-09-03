/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@Common/landingPage/card/Cards';
import Loader from '@Common/loader/Loader';
import './profileTab.scss';

const ProfileTab = (profile) => {
  const openTab = (elem, tabName) => {
    let i;
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i += 1) {
      tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i += 1) {
      tablinks[i].className = tablinks[i].className.replace('active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    elem.currentTarget.className += ' active';
  };

  useEffect(() => {
    document.getElementById('defaultOpen').click();
  }, []);

  return (
    <div className="container">
      <div className="tab">
        <button type="button" id="defaultOpen" className="tablinks" onClick={e => openTab(e, 'stories')}>Stories</button>
        {profile.id === profile.match.params.userId
        && (
          <>
            <button type="button" className="tablinks" onClick={e => openTab(e, 'bookmarks')}>Bookmarks</button>
            <button type="button" className="tablinks" onClick={e => openTab(e, 'drafts')}>Drafts</button>
          </>
        )
        }
      </div>
      {
        profile.articles.length > 6
          ? (
            <form>
              <div className="search_input_wrap">
                <i className="material-icons" id="search__icon">search</i>
                <input type="search" className="browser-default" id="search__profile" placeholder="Seach Here" />
              </div>
            </form>
          ) : null
      }
      {/* Tab Content */}
      <div id="stories" className="tabcontent">
        <div className="profileStories">
          { profile.articlesLoading && profile.articles.length === 0 && <Loader /> }
          {
            !profile.loading && profile.articles.length === 0
            && <h3>No Articles To Display At This Time</h3>
          }
          {
            !profile.loading && profile.articles.length > 0
            && profile.articles.map((article, key) => article.status === 'published'
            && <div className="singleStory" key={key.toString()}><Card {...article} key={article.id} /></div>)
          }
        </div>
      </div>
      <div id="bookmarks" className="tabcontent">
        <h3>You Have No Bookmarks To Display At This Time</h3>
      </div>
      <div id="drafts" className="tabcontent">
        <div className="profileStories">
          { profile.articlesLoading && profile.articles.length === 0 && <Loader /> }
          {
            !profile.loading && profile.articles.length === 0
            && <h3>You Have No Drafts To Display At This Time</h3>
          }
          {
            !profile.loading && profile.articles.length > 0
            && profile.articles.map((article, key) => article.status === 'draft'
            && <div className="singleStory" key={key.toString()}><Card {...article} key={article.id} /></div>)
          }
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProfileTab);
