// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/agency_website/PlasmicGlobalContextsProvider";
import { ClickedContext } from "../components/plasmic/agency_website/PlasmicGlobalVariant__Clicked";
import {
  PlasmicTransactions,
  Head
} from "../components/plasmic/agency_website/PlasmicTransactions";

export { Head };

function Transactions({ location, path, params }) {
  // Use PlasmicTransactions to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicTransactions are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicTransactions is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <ClickedContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={path}
          params={params}
          query={Object.fromEntries(new URLSearchParams(location.search))}
        >
          <PlasmicTransactions />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </ClickedContext.Provider>
  );
}

export default Transactions;
