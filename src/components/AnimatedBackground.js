import Particles from 'react-particles-js'

export default function AnimatedBackground() {
    return (
        <div>
            <Particles 
                    params={{ 
                    particles: { 
                        number: { 
                        value: 150, 
                        density: { 
                            enable: true, 
                            value_area: 1000, 
                        } 
                        }, 
                    }, 
                    }} 
                >
                </Particles>
        </div>
    )
}