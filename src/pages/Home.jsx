import React from "react";
import { FeaturesSectionDemo } from "./Featured";
import { CanvasRevealEffectDemo } from "./Team-page";
import ParentFeedbackSection from "./Feedback";
import PostersSection from "./PosterSection";
import CompetitionDetails from "./CompetionsDetails";
import SchoolPartners from "./Partners.jsx";

function Home() {
    return (
        <>
            <section className="carousel">
                <img
                    src="assets/homepage.svg"
                    alt="Homepage Background"
                    className="carousel-image"
                />
            </section>
            <FeaturesSectionDemo />
            {/* <CompetitionDetails/> */}
            <SchoolPartners/>
            <PostersSection />
            <CanvasRevealEffectDemo />
            <ParentFeedbackSection/>
        </>
    );
}

export default Home;
