import React from 'react';
import Article from './Article';

//bridge: no more passing down the author object
//author={props.authors[article.authorId]

const ArticleList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map(article => 
            <Article
                key={article.id}
                article={article}
                actions={props.articleActions} /> 
            )} 
            
        </div> 
    );
}
 
export default ArticleList;