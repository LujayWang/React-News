import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchNews,getNews} from './action'
import News from '../components/News'

const mapStateToProps=(state)=>{
    return state;
};

const mapDispatchToProps=(dispatch)=>{
    return {
        newsInfoActions:bindActionCreators({fetchNews,getNews},dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(News);