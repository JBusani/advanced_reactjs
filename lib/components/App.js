import React from 'react';
import DataApi from 'state-api';
import { data } from '../testData';
import ArticleList from './ArticleList';


const api = new DataApi(data);

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors(),
        };
        console.log(this.state);
    }

    //since app has the data, let's make a bridge to article component so article can look up
    //the author and id. 
    // take out authors={this.state.authors} from Article List
    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],
    }
    render() {
        return (
            <div>
                <ArticleList 
                articles={this.state.articles}
                articleActions={this.articleActions} />
            
            </div>
        );
    }
}

export default App;