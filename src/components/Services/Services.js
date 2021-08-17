import React from 'react'
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesIcon,ServicesH2,ServicesP,ServicesCard} from './ServiceElements';

import img_1 from '../../images/svg-3.svg'

import img_2 from '../../images/svg-4.svg'

import img_3 from '../../images/svg-5.svg'

const Services = () => {
    return (
     
         <ServicesContainer>
              <ServicesH1>Our Services</ServicesH1>
              <ServicesWrapper>
                 <ServicesCard>
                     <ServicesIcon src={img_1}>
                         {/* <Img></Img> */}
                     </ServicesIcon>
                     <ServicesH2></ServicesH2>
                     <ServicesP></ServicesP>
                 </ServicesCard>
                 
                    <ServicesCard>
                        <ServicesIcon src={img_2}>
                            {/* <Img></Img> */}
                        </ServicesIcon>
                        <ServicesH2></ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={img_3}>
                            {/* <Img></Img> */}
                        </ServicesIcon>
                        <ServicesH2></ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
              </ServicesWrapper>
              
          </ServicesContainer> 
    )
}

export default Services;
