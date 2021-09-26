import React, { Component } from 'react';
import './index.css';

class News extends Component{
	render(){
		const { data } = this.props;

		const convertEpochMilliseconds = (article) => {
			const epochMilliseconds = article.datetime;
			let [month, date, year] = new Date(epochMilliseconds).toLocaleDateString("en-US").split("/")
			const dateString = `${month}/${date}/${year}`;
			return dateString;			
		}

	    return (
	    	<div>
		    	{data.map((article, index) => (		    		
		    		<div className="article" key={index}>
		        		<a href={article.url} className="article-headlines" key={index+1} id={index}>{article.headline}</a>
		        		<p key={index+2}>{article.source} | {convertEpochMilliseconds(article)}</p>
		        	</div>		        	
		    	))}
	    	</div>
	    );
	}
}

export default News;
