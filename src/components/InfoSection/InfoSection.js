import React from 'react'
import {Button} from '../ButtonElement'

import { 
    InfoContainer,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,Column2,InfoWrapper
    , ImgWrap ,Img} from './InfoElements'


const InfoSection = ({lightBg,id,topLine,description,headLine,imgStart,lightText,darkText,darkBg,buttonLabel,primary,dark,img}) => {
    return (
        
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>

                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                   {headLine}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary?1:0}
                                    dark={dark?1:0}

                                    >
                                       {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper >
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img
                                    src={img} 
                                />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
       
    )
}

export default InfoSection

