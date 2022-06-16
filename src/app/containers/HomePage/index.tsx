import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { PageContainer } from "./style";
import { TopSection } from "./topSection";

export function HomePage(){
    return (
        <PageContainer>
        <Navbar/>
        <TopSection/>
        <Marginer direction="vertical" margin={"2em"} />
        <BookCard/>
        <Marginer direction="vertical" margin={"2em"} />
        <BookingSteps/>
        <Marginer direction="vertical" margin={"2em"} />
        <AboutUs/>
       </PageContainer>
    )
}