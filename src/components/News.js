import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News-Genie - Top Headlines</h2>
        <div className='row'>
          <div className='col-md-4'>
              <NewsItem title="myTitle" description="mydesc"></NewsItem>
          </div>
          <div className='col-md-4'>
              <NewsItem title="myTitle" description="mydesc"></NewsItem>
          </div>
          <div className='col-md-4'>
               <NewsItem title="myTitle" description="mydesc"></NewsItem>
          </div>
        </div>
      </div>
    )
  }
}

export default News
//c08278b4489c46cdb50c59080ec39ef2