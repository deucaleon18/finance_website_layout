import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
export const Nav = styled.nav `

background:#000;
height:80px;

z-index:10;
justify-content:center;
display:flex;
align-items:center;
font-size:1rem;
 position:sticky;

top;0;

@media screen and (max-width:960px){
 transition:0.8 sec all ease;
}


`

export const NavContainer = styled.div`

 display:flex;
 height:80px;
 width:100%;
 max-width:1100px;
 padding:0 24px;
 z-index:1;
 justify-content:space-between;

`
export const NavLogo = styled(LinkR)`

cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
font-weight:bold;
text-decoration:none;
color:#fff

`

export const MobileIcon=styled.div `

@media screen and (max-width:768px)
 {
display:block;
position:absolute;
top:0;
right:0;
transform:translate(-100%,60%)
font-size:1.8rem
height:80px;
cursor:pointer;
color:white;
 }
`
export const NavMenu=styled.ul `

display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;

@media screen and (max-width:768px){
    display:none
}
`

export const NavItem=styled.li `

height:80px;
`

export const NavLinks=styled(LinkS)`

color:#fff;
text-decoration:none;
text-align:center;
display:flex;
cursor:pointer;
font-weight:bold;
font-size:1.2rem;
height:100%;
padding:1.5rem 1rem;
&:active{
    border-bottom:solid 3px #01bf71;
}
`
export const NavBtn=styled.nav `

display:flex;
align-items:center;

@media screen and (max-width:768px){
    display:none
}


`
export const NavBtnLink=styled.div`

border-radius:50px;

background:#01bf71;
white-space:nowrap;
color:#010606;
font-size:16px;
padding:10px 22px;
outline:none;
border:none;
transition:all 0.2s ease-in-out;
text-decoration:none;


&:hover{
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
    cursor:pointer;
}
`
