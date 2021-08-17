import { ArrowForward } from '@material-ui/icons'
import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg,HeroH1,HeroP,HeroBtnWrapper,ArrowRight,HeroContent} from './HeroElements'
import {Button} from '../ButtonElement'
const HeroElements = () => {


    const[hover,setHover]=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay muted loop src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                  
                Sign up for a new account today and receive $50 in credit towards your next payment.
                    <HeroBtnWrapper>
                        
                        <Button to ="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        
                        primary="true"
                        dark="true"

                        >
                            Get started{hover?(<ArrowForward/>):(<ArrowRight/>)}

                            </Button>
                    </HeroBtnWrapper>
                </HeroP>
                </HeroContent>
        </HeroContainer>
    )
}

export default HeroElements
