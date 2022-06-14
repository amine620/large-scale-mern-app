import { ListContainer, NavItem } from "./style";
import {Slide as Menu} from "react-burger-menu"
import {useMediaQuery} from "react-responsive"


export function NavItems(){

    const isMobile=useMediaQuery(()=>{

    }) 
   return (
    <ListContainer>
    <NavItem>
      <a href="#">Home</a>  
    </NavItem>
    <NavItem>
      <a href="#">Cars</a>  
    </NavItem>
    <NavItem>
      <a href="#">Services</a>  
    </NavItem>
    <NavItem>
      <a href="#">Contact Us</a>  
    </NavItem>
</ListContainer>
   )
}