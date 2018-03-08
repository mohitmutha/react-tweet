import React from 'react';
import ReactDom from 'react-dom';
import Tweet from '../src/components/Tweet/Tweet.js';
import './_app.css';
import tweets from './tweets'

const linkProps = { target: '_blank' };

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = { autoplayVideo: false };
  }

  render() {
    return (<div style={{ textAlign: 'center' }}>
      <div style={{ width: '100%', backgroundColor: '#3F51B5', clear: 'both', color: '#fff', padding: 15, fontFamily: 'Verdana' }}> <input type="checkbox" onClick={(event) => this.setState({ autoplayVideo: !this.state.autoplayVideo })} name="vehicle" value="Bike" />Auto play videos</div>
      <div className="ExamplePage" style={{ 'width': '590px', 'margin': '0 auto' }}>
        <div className="tweet-stream" style={{ 'width': '100%' }}>
          {tweets.map((t, i) => (
            <Tweet autoPlay={this.state.autoplayVideo} data={t} key={i} linkProps={linkProps} />
          ))}
        </div>
      </div>
    </div>)
  }
}

ReactDom.render((
  (<Container />)
), document.getElementById('container'))

