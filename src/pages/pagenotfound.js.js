import React from "react";
import HeroSection from "./../components/HeroSection";
import { useRouter } from "./../util/router.js";

function PageNotFoundJsPage(props) {
  const router = useRouter();

  return (
    <HeroSection
      bg="white"
      textColor="dark"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="PAGE NOT FOUND"
      subtitle=""
      buttonText="Go to Home Page"
      buttonColor="light"
      buttonOnClick={() => {
        // Navigate to pricing page
        router.push("/pricing");
      }}
    />
  );
}

export default PageNotFoundJsPage;
