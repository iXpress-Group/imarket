import React from 'react';

class EditFiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            data:[]
        }
    }

    componentDidMount() {
        let xhttp = new XMLHttpRequest();
        let self = this;
        let body = {
            'trxRef': '19567751-F53B-4B15-A4B4-97952F1B2834',
            'channelId': 'momo-mtn-rw',
            'accountId': '92234DCC-FE88-4F2E-941B-E44F06F2B12D',
            'msisdn': '0781402403',
            'amount': 100,
            'callback': 'https://your-callback.example-app.com'
        };
        xhttp.onreadystatechange = function (e) {
            if (this.readyState === 4) {
                // console.log('Status:', this.status);
                // console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);
                console.log('Data:', this.responseText);
                self.setState({
                    posts: JSON.parse(this.response),
                    data: JSON.parse(this.response.data)
                });
            }
        };
        xhttp.open("POST", "https://private-anon-3605d0eaf6-fdipaymentsapi.apiary-mock.com/v2/momo/pull", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('Accept', 'application/json');
        xhttp.send(JSON.stringify(body));

    }

    render() {
        console.log(this.state.posts);
        console.log(this.state.data);
        // let posss;
        // posss = this.state.posts.data;
        // console.log(posss);
        // let postsLoaded = this.state.posts.length > 0;
        return (
            <div>
                {/*{posss.map(post => {*/}
                {/*    return <p>{post.title};</p>*/}
                {/*})}*/}
            </div>
        );
    }
}

export default EditFiles;
