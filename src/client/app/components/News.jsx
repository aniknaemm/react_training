import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadNews } from '../actions/action';
import New from './New';
import Loader from './Loader';

class News extends Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }
  render() {
    const { isLoad, news } = this.props;
    return isLoad ? (
      <Loader />
    ) : (
      <div className="container">
        {news.map((elem, indx) => {
          return <New text={elem.text} title={elem.title} key={elem.title + indx} />;
        })}
        <p className="countNews">всего новостей: {news.length}</p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    news: state.news,
    isLoad: state.isLoad
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getNews: () => loadNews(dispatch)
  };
};
News.propTypes = {
  getNews: PropTypes.func.isRequired,
  isLoad: PropTypes.bool.isRequired,
  news: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
