import Banner from "@/features/home/components/Banner";
import FooterHome from "@/features/home/components/Footer";
import HeaderHome from "@/features/home/components/Header";
import InterviewTypes from "@/features/home/components/InterviewTypes";
import Reviews from "@/features/home/components/Reviews";

export default function Home() {
    return (
        <main>
            <HeaderHome/>
            <Banner/>
            <InterviewTypes/>
            <Reviews/>
            <FooterHome/>
        </main>
    );
}
