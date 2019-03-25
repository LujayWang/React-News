import React, { Component } from 'react';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    componentDidMount() {
        var type = this.props.match.params.type;
        this.props.newsInfoActions.fetchNews(type);

    }

    componentDidUpdate() {
        var type = this.props.match.params.type;
        this.props.newsInfoActions.fetchNews(type);
    }

    render() {
        return (
            <div>ahgoahgahogho</div>
        )
    }
}