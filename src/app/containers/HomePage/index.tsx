import { BookCard } from "../../components/bookCard";
import { Navbar } from "../../components/navbar";
import { PageContainer } from "./style";
import { TopSection } from "./topSection";

export function HomePage(){
    return (
        <PageContainer>
        <Navbar/>
        <TopSection/>
        <BookCard/>
       </PageContainer>
    )
}