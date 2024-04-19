import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    const {mode} = this.props;
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    const MAX_TITLE_LENGTH = 25;
    const MAX_DESCRIPTION_LENGTH = 88;

    // Truncate title and description if they exceed the maximum length
    const truncatedTitle = title.length > MAX_TITLE_LENGTH? `${title.slice(0, MAX_TITLE_LENGTH)}...`: title;
    const truncatedDescription =description.length > MAX_DESCRIPTION_LENGTH ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`: description;
                    
    return (
      <div className="my-3" >
        <div className={`card ${mode === 'dark' ? 'dark-card' : 'light-card'}`}>
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-danger">
              {source}
              </span>
              </div>
          <img

            src={
              !imageUrl ? "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg" : imageUrl                
            }
            className="card-img-top"
            alt="..."
          />
          
          <div className={`card-body ${mode === 'dark' ? 'dark-card' : 'light-card'}`}>
            <h5 className="card-title">
              {truncatedTitle}...              
            </h5>
            <p className="card-text">{truncatedDescription}...</p>
            <p className="card-text">
              <small className="text-white">
                By {!author ? "unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <Link
              rel="noreferrer"
              to={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </Link>
          
        </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
