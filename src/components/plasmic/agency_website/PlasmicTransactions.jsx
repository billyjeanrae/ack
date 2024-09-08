// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7w3AimKvhNQygAijpdB7ms
// Component: 3JnCdnTerwol
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Navbar from "../../Navbar"; // plasmic-import: yZ_cQNVr9Dd_/component
import Client from "../../Client"; // plasmic-import: Ws3kZmgloHhQ/component
import TransactionReel from "../../TransactionReel"; // plasmic-import: bczKgsd8lwW1/component
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: SSIvXflUB2k5/component
import FooterMain from "../../FooterMain"; // plasmic-import: 3Hx5Xex_O1aO/component
import { useScreenVariants as useScreenVariantsnU8IdsSvi2F6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nU8idsSVI2F6/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 7w3AimKvhNQygAijpdB7ms/projectcss
import * as sty from "./PlasmicTransactions.module.css"; // plasmic-import: 3JnCdnTerwol/css

createPlasmicElementProxy;

export const PlasmicTransactions__VariantProps = new Array();

export const PlasmicTransactions__ArgProps = new Array();

const $$ = {};

export function Head() {
  return (
    <>
      <meta name="twitter:card" content="summary" />
      <title key="title">{PlasmicTransactions.pageMetadata.title}</title>
      <meta
        key="og:title"
        property="og:title"
        content={PlasmicTransactions.pageMetadata.title}
      />

      <meta
        key="twitter:title"
        name="twitter:title"
        content={PlasmicTransactions.pageMetadata.title}
      />
    </>
  );
}

function PlasmicTransactions__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnU8IdsSvi2F6()
  });
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"banner"}
            data-plasmic-override={overrides.banner}
            className={classNames(projectcss.all, sty.banner)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kyiMv)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Streamlined and Secure Transactions for Your Business Needs"
                    : "Streamlined and Secure Transactions for Your Business Needs"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__psmam
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "At Ackrell Capital Industrial Bank, we understand the importance of efficient and secure transactions in managing your business operations. Our advanced transaction services are designed to provide you with the convenience, reliability, and security your business requires."
                    : "At Ackrell Capital Industrial Bank, we understand the importance of efficient and secure transactions in managing your financial life. Our advanced transaction services are designed to provide you with the convenience, reliability, and security you need, whether you're conducting personal or business transactions."}
                </div>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__ehCv1)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__qq9N)}
            >
              <div className={classNames(projectcss.all, sty.column__hu81)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0QlM)}
                >
                  <div
                    className={classNames(projectcss.all, sty.columns___1Hncz)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__joC6E)}
                    >
                      <Client
                        className={classNames(
                          "__wab_instance",
                          sty.client__w0NQl
                        )}
                        slot={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__owYuc
                            )}
                          >
                            {
                              "Access the capital you need to grow your business with our flexible commercial loan and credit options. Whether you are expanding operations, purchasing equipment, or investing in new opportunities, our financial solutions provide the support you need. Benefit from competitive rates, customized repayment terms, and dedicated loan advisors who understand your business goa and help you achieve them."
                            }
                          </div>
                        }
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__tlGwR
                          )}
                        >
                          {"Commercial Loans and Credit"}
                        </h2>
                      </Client>
                    </div>
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column__jqq3C)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__nbGfo)}
                >
                  <div
                    className={classNames(projectcss.all, sty.columns__hMcCc)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__bWuWa)}
                    >
                      <Client
                        className={classNames(
                          "__wab_instance",
                          sty.client__vPjAt
                        )}
                        slot={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kk3Of
                            )}
                          >
                            {
                              "Optimize your cash flow with Ackrell Capital Industrial Bank's comprehensive cash management solutions. Services include remote deposit capture, liquidity management, and detailed cash flow analysis. Our advanced tools and expert support help you manage your finances effectively, reduce operational risks, and make informed decisions to maximize your business's financial health."
                            }
                          </div>
                        }
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__hSqUu
                          )}
                        >
                          {"Cash Management Solutions"}
                        </h2>
                      </Client>
                    </div>
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column__diaYb)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__sVctV)}
                >
                  <div
                    className={classNames(projectcss.all, sty.columns__uA4G)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__pLbb8)}
                    >
                      <Client
                        className={classNames(
                          "__wab_instance",
                          sty.client__pYteb
                        )}
                        slot={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__mnu9C
                            )}
                          >
                            {
                              "Efficiently process customer payments with our comprehensive merchant services. Tailored to fit your business needs, our solutions include point-of-sale (POS) systems, online payment gateways, and mobile payment options. Enhance your payment processing capabilities, improve customer satisfaction, and streamline your revenue collection processes. Our merchant services are designed to support your business growth and operational efficiency."
                            }
                          </div>
                        }
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2___2Y4Hd
                          )}
                        >
                          {"Merchant Services"}
                        </h2>
                      </Client>
                    </div>
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column__gSfK7)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jyKw7)}
                >
                  <div
                    className={classNames(projectcss.all, sty.columns__sKAdA)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__qFqtp)}
                    >
                      <Client
                        className={classNames(
                          "__wab_instance",
                          sty.client__nMnKo
                        )}
                        slot={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___3MtMy
                            )}
                          >
                            {
                              "Protect your transactions with Ackrell Capital Industrial Bank's state-of-the-art security features, including multi-factor authentication and encryption. Our systems continuously monitor for suspicious activity, providing round-the-clock protection and peace of mind. Additionally, our dedicated customer service team is available to assist you with any transaction-related inquiries or issues, ensuring you receive the support you need whenever you need it."
                            }
                          </div>
                        }
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__rCmgL
                          )}
                        >
                          {"Security and Support"}
                        </h2>
                      </Client>
                    </div>
                  </div>
                </Stack__>
              </div>
            </Stack__>
          </div>
          <TransactionReel
            data-plasmic-name={"transactionReel"}
            data-plasmic-override={overrides.transactionReel}
            className={classNames("__wab_instance", sty.transactionReel)}
          />

          <div
            data-plasmic-name={"footerTopSection"}
            data-plasmic-override={overrides.footerTopSection}
            className={classNames(projectcss.all, sty.footerTopSection)}
          >
            <HomeFooterTop
              data-plasmic-name={"homeFooterTop"}
              data-plasmic-override={overrides.homeFooterTop}
              className={classNames("__wab_instance", sty.homeFooterTop)}
            />
          </div>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "banner",
    "foreground2",
    "h1",
    "transactionReel",
    "footerTopSection",
    "homeFooterTop",
    "footerMain"
  ],

  navbar: ["navbar"],
  banner: ["banner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  transactionReel: ["transactionReel"],
  footerTopSection: ["footerTopSection", "homeFooterTop"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTransactions__ArgProps,
          internalVariantPropNames: PlasmicTransactions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTransactions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTransactions";
  } else {
    func.displayName = `PlasmicTransactions.${nodeName}`;
  }
  return func;
}

export const PlasmicTransactions = Object.assign(
  // Top-level PlasmicTransactions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    banner: makeNodeComponent("banner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    transactionReel: makeNodeComponent("transactionReel"),
    footerTopSection: makeNodeComponent("footerTopSection"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),
    // Metadata about props expected for PlasmicTransactions
    internalVariantProps: PlasmicTransactions__VariantProps,
    internalArgProps: PlasmicTransactions__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Transactions",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTransactions;
/* prettier-ignore-end */
