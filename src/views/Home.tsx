import React from "react";
import BlogSummary from "../components/BlogSummary";
import HeroBanner from "../components/HeroBanner";

function Home (): React.ReactElement<{}> {
    return (<><HeroBanner/><BlogSummary/></>)
}

export default Home