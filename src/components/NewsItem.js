import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, urlToNews, author, date, source } = this.props;
        return (
            <div>
                <div className="card my-3">
                    {/* badge */}
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: "2" }}>
                        {source}
                    </span>
                    {/* card image */}
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ width: "100%", height: "220px", margin: "auto" }} />
                    {/* card-content */}
                    <div className="card-body">
                        <h5 className="card-title">{title.length >= 80 ? title : title}</h5>
                        <p className="card-text">{description.length > 100 ? `${description.slice(0, 90)}...` : description}</p>
                        <p className="card-text"><small className="text-muted">By {author} at {new Date(date).toGMTString()}</small></p>
                        <a href={urlToNews} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}