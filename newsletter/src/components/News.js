import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
    static propTypes = {
        prop: PropTypes
    }
    //   https://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY

    //   73b8ea3bc8464e5389b4156d048c2aee
    render() {
        return (
            <div>
                <div className="container">
                    <h2>NewsMonkey-Top Headlines</h2> 

                    <div className="row">
                        <div className="col-md-4">
                            <NewsItem title="mytitle" description="mydesc" />
                        </div>
                        <div className="col-4">
                            <NewsItem title="mytitle" description="mydesc" />
                        </div>
                        <div className="col-4">
                            <NewsItem title="mytitle" description="mydesc" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
