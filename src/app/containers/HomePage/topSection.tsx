import { BlobContainer, ButtonsContainer, Description, LeftContainer, RightContainer, Slogan, StandaloneCar, TopSectionContainer } from "./style";
import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { Button } from "../../components/button/button";


export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>
                    Rent The Best Qulity Car's With Us
                </Slogan>
                <Description>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem veniam officiis adipisci dolorem illum accusamus ducimus quisquam saepe voluptatum!
                </Description>
                <ButtonsContainer>
                <Button text="Book Your Ride" />
                <Button text="Sell Your Car" theme="filled"/>
                </ButtonsContainer>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} />
                </BlobContainer>
                <StandaloneCar>
                    <img src={MclarenCarImg} alt="" />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    )
}