import React from 'react';
import {Button} from '../../globalStyle';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText ,
    Form ,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,


}from './FooterElements';



const Footer = () => {

    return (
        <>
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                To benefit from the site's services and to receive notifications about all new, subscribe
                </FooterSubHeading>
                <FooterSubText>
                You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                 <FormInput name="email" type="email" placeholder="Your Email"/>
                     <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>

            <FooterLinksContainer>

           <FooterLinksWrapper>
             <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>Healthy body</FooterLink>
            <FooterLink to='/'> Health information</FooterLink>
            <FooterLink to='/'> Healthy sport</FooterLink>
            <FooterLink to='/'> Healthy food</FooterLink>
            <FooterLink to='/'>Health questions</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle> Reports</FooterLinkTitle>
            <FooterLink to='/'>Inspection Results</FooterLink>
            <FooterLink to='/'> Health Reports</FooterLink>
            <FooterLink to='/'>Performance</FooterLink>
            <FooterLink to='/'>Strategy</FooterLink>
          </FooterLinkItems>
              </FooterLinksWrapper>

              <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Information</FooterLinkTitle>
            <FooterLink to='/'>Your Health</FooterLink>
            <FooterLink to='/'>Your Kid’s Health</FooterLink>
            <FooterLink to='/'>Healthy Places </FooterLink>
            <FooterLink to='/'>Healthy Environments</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>         
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
           </FooterLinksContainer>
         <SocialMedia>
           <SocialMediaWrap>

               <SocialLogo to='/'>
                 <SocialIcon/>
                 Public Health
               </SocialLogo>

               <WebsiteRights>Public Health 2020</WebsiteRights>

             <SocialIcons>
               <SocialIconLink href="https://m.facebook.com/?locale2=ar_AR" target="_blank" aria-label="facebook">
                  <FaFacebook/>  
               </SocialIconLink>

               <SocialIconLink href="https://www.instagram.com/accounts/login/" target="_blank" aria-label="Instagram">
                  <FaInstagram/>  
               </SocialIconLink>
              
               <SocialIconLink href="https://www.youtube.com" target="_blank" aria-label="Youtube">
                  <FaYoutube/>  
               </SocialIconLink> 

               <SocialIconLink href="https://mobile.twitter.com/login?lang=ar" target="_blank" aria-label="Twitter">
                  <FaTwitter/>  
               </SocialIconLink> 

               <SocialIconLink href="https://www.linkedin.com/login/ar" target="_blank" aria-label="Linkedin">
                  <FaLinkedin/>  
               </SocialIconLink> 

             </SocialIcons>
             </SocialMediaWrap>
           </SocialMedia>
        </FooterContainer>
        </>
    )
}

export default Footer
