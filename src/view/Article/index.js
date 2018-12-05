import React,{Component} from 'react';
import ArticleHeader from '../../components/ArticleHeader/'
class Article extends Component{
    render(){
        return(
            <div className='article'>
            <ArticleHeader/>
            </div>
        )
    }
}

export default Article;