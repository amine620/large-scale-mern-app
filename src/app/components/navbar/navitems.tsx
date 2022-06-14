import { ListContainer, menuStyle, NavItem } from "./style";
import { slide as Menu } from "react-burger-menu"
import { useMediaQuery } from "react-responsive"
import { SCREENS } from "../responsive";


export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
      console.log(isMobile);
      
    if (isMobile)
        return (
            <Menu right styles={menuStyle}>
                <ListContainer>
                    <NavItem menu>
                        <a href="#">Home</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Cars</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Services</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Contact Us</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        )
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