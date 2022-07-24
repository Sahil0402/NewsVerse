import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  //prop types for restrictions
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    titleCat: PropTypes.string
  }

  //default props value for news component
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'science',
    titleCat: 'category'
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      newArticles: []
    }
  }

  update = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45b1800ff6024b4fbe87c7a126018faf&page=${this.state.page}&pageSize=${this.props.pageSize}`;//our api url for request
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })

  }
  async componentDidMount() {
    this.update();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      console.log(this.state.page);
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45b1800ff6024b4fbe87c7a126018faf&page=${this.state.page}&pageSize=${this.props.pageSize}`;//our api url for request
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  };

  render() {
    return (
      <>
        <h3 className='fw-bold text-center mb-3'>Top headlines | {this.props.titleCat}</h3>
        {this.state.loading && <Spinner className='m-auto' />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">

            <div className="row">
              {this.state.articles.map((element) => {

                return (
                  <div className="col-12 col-lg-6 col-xl-4 mb-2 mb-sm-2 d-flex  justify-content-center align-items-center" key={element.url}>
                    <NewsItem title={element.title ? element.title : "Unknown"} description={element.description ? element.description : "Not found"} imageUrl={element.urlToImage ? element.urlToImage : "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"} urlToNews={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}
