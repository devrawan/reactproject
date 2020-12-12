import React  , {useState,useEffect}from 'react'
import {FaTimes,FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import{Nav ,
    NavbarContainer,
    NavLogo,
    NavIcon ,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
} from './Navbarelements';
import {Button} from '../../globalStyle';


 const Navbar = () => {
     const [click , setClick]= useState(false);
     const [button,setButton]= useState(true);


     const handelClick  = () =>{
         setClick(!click);
     }

     const showButton = ()=>{
         if(window.innerWidth <= 960){
             setButton(false)
         }else{
             setButton(true)
         }
     }

     useEffect(() => {
        showButton();
     }, [])


     window.addEventListener('resize',showButton);
     return (
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
              <NavbarContainer>
                <NavLogo to='/' >
                  <NavIcon />
                  Public Health
                </NavLogo>
                <MobileIcon onClick={handelClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handelClick} click={click}>
                  <NavItem>
                    <NavLinks to='/' >
                      Home
                    </NavLinks>
                  </NavItem>
                 
                  <NavItem>
                    <NavLinks to='/MediaCard' >
                    categeroy
                    </NavLinks>
                  </NavItem>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to='/sign-up'>
                        <Button primary>SIGN UP</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to='/sign-up'>
                        <Button  fontBig primary>
                          SIGN UP
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                </NavMenu>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
      );
    }
    
    export default Navbar;