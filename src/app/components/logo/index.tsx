import carLogo from "../../../assets/images/car-logo.png"
import { Image, LogoContainer, LogoText } from "./style"

export function Logo(){
    return(
        <LogoContainer>
            <Image>
                <img src={carLogo} />
            </Image>
            <LogoText>YourCar</LogoText>
        </LogoContainer>
    )
}