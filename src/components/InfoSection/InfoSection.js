import React  , {useState,useEffect} from 'react'
import { Container,Button } from '../../globalStyle';
import {InfoSec ,
     InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine ,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSectionElements';
import {Link}  from 'react-router-dom';


const axios = require('axios');


const InfoSection = ({primary, lightBg,imgStart, 
    lightTopLine,lightTextDesc,buttonLabel,
    description,headline,lightText,topLine,
     img,
     alt,
     start}) => {

       

 useEffect(() => {
   
    handelapi();
        
      
        }, []);
        
const handelapi=()=>{
    const options = {
        method: 'GET',
        url: 'https://community-healthcaregov.p.rapidapi.com/what-is-the-health-insurance-marketplace.json',
        headers: {
          'x-rapidapi-key': '9a525c9f57msh8db71f4e654153ap1291d8jsn0b996b332d57',
          'x-rapidapi-host': 'community-healthcaregov.p.rapidapi.com'
        }
      };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
}

//   const  handelread =()=>{
//  axios.get('https://arabicpost.net/wp-json/wp/v2/posts?categories=49843')

//     .then(function (response) {
   
//     })
//     .catch(function (error) {
     
//       console.log(error);
//     })
//     }

    return (
        <>
        <InfoSec lightBg={lightBg}>
           <Container>
             <InfoRow  imgStart={imgStart}>
              <InfoColumn>
                  <TextWrapper>
                      <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                      <Heading lightText={lightText}> {headline}</Heading>
                       <Subtitle lightTextDesc={lightTextDesc} >{description}  </Subtitle>
                       <Link to="/sign-up">
                           <Button  big fontBig primary ={primary}>
                               {buttonLabel}
                           </Button>
                       </Link>
                 </TextWrapper>
              </InfoColumn>
               <InfoColumn>
                   <ImgWrapper start={start}>
                <Img src={img} alt={alt}></Img>
                   </ImgWrapper>
               </InfoColumn>
             </InfoRow>
           </Container>
        </InfoSec>
        </>
    )
}


export default InfoSection
