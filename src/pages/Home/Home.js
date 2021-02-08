import React from 'react'
import './home.css'
import AnimatedBackground from '../../components/AnimatedBackground'
class Home extends React.PureComponent {

    render () {
        return (
            <div className="pages-main">
                <br></br>
                <div className="overParticles background-white center-text">
                    <br />
                    <h1>Bitcoin Analysis Tool</h1>
                    <br />
                    <h3>This was created using React</h3>
                    <br />
                    <h3>You can create an account and track various metrics regarding your personal stash</h3>
                    <br />
                    <h3>If you are new to Bitcoin, click <a href="#">here</a></h3> 

                </div>
                <AnimatedBackground />
            </div>
        )
    }
        
        
    
}

export default Home
