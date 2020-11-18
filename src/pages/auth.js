import React from "react";
import AuthSection from "./../components/AuthSection";
import { useRouter } from "./../util/router.js";

function AuthPage(props) {
  const router = useRouter();

  return (
    <AuthSection
      bg="dark"
      textColor="light"
      size="md"
      bgImage="https://source.unsplash.com/RnCPiXixooY"
      bgImageOpacity={0.8}
      inputSize="lg"
      type="signup"
      providers={["google", "facebook", "twitter"]}
      afterAuthPath="/dashboard"
    />
  );
}

export default AuthPage;
