import React from 'react'
import './home.css'
import AnimatedBackground from '../../components/AnimatedBackground'
class Home extends React.PureComponent {

    render () {
        return (
            <div className="pages-main">
                <br></br>
                <h1 className='center-text'>Welcome to My Bitcoin Analysis Tool Made in React</h1>
                <ul className='center-text chart-header'>
                    <li><a href="www.reddit.com">Bitcoin Subreddit</a></li>
                    <li><a href="www.reddit.com">Bitcoin Whitepaper</a></li>
                    <li><a href="www.reddit.com">Coinbase</a></li>
                </ul>
                <AnimatedBackground />
            </div>
        )
    }
        
        
    
}

export default Home
