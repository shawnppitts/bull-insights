import React, { Component } from 'react';
import './index.css';

class News extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		const { data } = this.props;
		console.log(data);	
	    return (
	    	<div>
		    	{data.map((article, index) => (
		    		<div className="article">
		        		<a href={article.url} key={index} id={index}>{article.headline}</a>
		        		<p key={index}>{article.source} | {article.datetime}</p>
		        	</div>		        	
		    	))}
	    	</div>
	    );
	}
}

export default News;
