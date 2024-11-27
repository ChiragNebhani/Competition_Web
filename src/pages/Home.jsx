import React from "react";
import { FeaturesSectionDemo } from "./Featured";
import { CanvasRevealEffectDemo } from "./Team-page";
import ParentFeedbackSection from "./Feedback";
import PostersSection from "./PosterSection";

function Home() {
    return (
        <>
            <section className="carousel">
                <img
                    src="/src/assets/homepage.svg"
                    alt="Homepage Background"
                    className="carousel-image"
                />
            </section>
            <FeaturesSectionDemo />
            <CanvasRevealEffectDemo />
            <PostersSection />
            <ParentFeedbackSection/>
        </>
    );
}

export default Home;
