import { Logo } from "../logo";
import { NavItems } from "./navitems";
import { LogoContainer, NavbarContainer } from "./style";

export function Navbar(){
    return(
        <NavbarContainer>
          <LogoContainer>
              <Logo/>
          </LogoContainer>
          <NavItems/>
        </NavbarContainer>
    )
}