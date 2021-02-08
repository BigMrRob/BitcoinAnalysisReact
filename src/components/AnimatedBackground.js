import Particles from 'react-particles-js'

export default function AnimatedBackground() {
    return (
        <div>
           <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 30,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
	                    "height": 20,
	                    "width": 23
                    }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
        </div>
    )
}