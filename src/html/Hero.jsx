import '../App.css'
import { animated, useSpring } from 'react-spring'

const Hero = () => {

    const springs = useSpring({
        from: {
            y: -100
        },
        to: {
            y: 0
        }
    })

    return (
        <animated.div className='hero-container' style={{ ...springs }}>

            <div className="text-container">
                <div className="text-box">
                    <h1>Dream</h1>
                    <h3>Today, I created this modal. Very soon, this dream of mine will come true.</h3>
                </div>
            </div>
            <div className="icon-container">
                <div className="icon-box">
                    <a href="https://github.com/syedmomin" target={'_blank'}>
                        <img src="/github.svg" alt="github" />
                    </a>
                    <a href="https://www.facebook.com/DanySAM.hacki.786" target={'_blank'}>
                        <img src="/facebook.svg" alt="facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/syedabdulmomin/" target={'_blank'}>
                        <img src="/linkedin.svg" alt="linkedin" />
                    </a>
                </div>
            </div>
            {/* <div className="credit-container">
                <div className="credit-box">
                    This work is based on
                    <a href="https://sketchfab.com/3d-models/hongqi-h9-bbcbdc697a614c25a5b02ce2a4b2c6ca" target={'_blank'}> hongqi h9</a> by
                    <a href="https://sketchfab.com/a0930582398" target={'_blank'}> Davidson</a>
                </div>
            </div> */}
        </animated.div>
    )
}

// licensed under
//     < a href = "http://creativecommons.org/licenses/by/4.0/" target = { '_blank'} > CC - BY - 4.0</ >

export default Hero
