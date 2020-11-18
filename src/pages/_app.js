import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import WorkHistoryPage from "./work history";
import AllBlogsPage from "./all-blogs";
import PageNotFoundJsPage from "./pagenotfound.js";
import { Switch, Route, Router } from "./../util/router.js";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/Work History" component={WorkHistoryPage} />

            <Route exact path="/all-blogs" component={AllBlogsPage} />

            <Route
              exact
              path="/pageNotFound.js"
              component={PageNotFoundJsPage}
            />

            <Route
              exact
              path="/firebase-action"
              component={FirebaseActionPage}
            />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="dark"
            textColor="white"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="We are a leading IT company in the tech industry and we focus on the ideas appearing in the markets."
            copyright="© 2020 Telic Solutions Inc"
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
