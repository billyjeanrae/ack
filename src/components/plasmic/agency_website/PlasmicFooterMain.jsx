// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7w3AimKvhNQygAijpdB7ms
// Component: 3Hx5Xex_O1aO
import * as React from "react";
import { Link } from "gatsby";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 7w3AimKvhNQygAijpdB7ms/projectcss
import * as sty from "./PlasmicFooterMain.module.css"; // plasmic-import: 3Hx5Xex_O1aO/css

createPlasmicElementProxy;

export const PlasmicFooterMain__VariantProps = new Array();

export const PlasmicFooterMain__ArgProps = new Array();

const $$ = {};

function PlasmicFooterMain__RenderFunc(props) {
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
  return (
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"rowWrapper"}
          data-plasmic-override={overrides.rowWrapper}
          hasGap={true}
          className={classNames(projectcss.all, sty.rowWrapper)}
        >
          <div
            data-plasmic-name={"colmn1"}
            data-plasmic-override={overrides.colmn1}
            className={classNames(projectcss.all, sty.colmn1)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3___6O2T8
              )}
            >
              {""}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cRaeP
              )}
            >
              {
                "Ackrell Capital \u00a9 2024, All Rights Reserved.\nSecurities offered through Ackrell Capital, LLC, member FINRA/SIPC.\n\n"
              }
            </div>
          </div>
          <div
            data-plasmic-name={"colmn3"}
            data-plasmic-override={overrides.colmn3}
            className={classNames(projectcss.all, sty.colmn3)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3___8LOqb
              )}
            >
              {"Contact "}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5E9Nj
              )}
            >
              {"38 Keyes Avenue\nSan Francisco, CA 94129\nUnited States"}
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nkp4F
              )}
              component={Link}
              href={"#"}
              platform={"gatsby"}
            >
              {"xyz@company.com"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__cVslk
              )}
              component={Link}
              href={"#"}
              platform={"gatsby"}
            >
              {"1234567890"}
            </PlasmicLink__>
          </div>
        </Stack__>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "rowWrapper", "colmn1", "colmn3"],
  freeBox: ["freeBox", "rowWrapper", "colmn1", "colmn3"],
  rowWrapper: ["rowWrapper", "colmn1", "colmn3"],
  colmn1: ["colmn1"],
  colmn3: ["colmn3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterMain__ArgProps,
          internalVariantPropNames: PlasmicFooterMain__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterMain";
  } else {
    func.displayName = `PlasmicFooterMain.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterMain = Object.assign(
  // Top-level PlasmicFooterMain renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    rowWrapper: makeNodeComponent("rowWrapper"),
    colmn1: makeNodeComponent("colmn1"),
    colmn3: makeNodeComponent("colmn3"),
    // Metadata about props expected for PlasmicFooterMain
    internalVariantProps: PlasmicFooterMain__VariantProps,
    internalArgProps: PlasmicFooterMain__ArgProps
  }
);

export default PlasmicFooterMain;
/* prettier-ignore-end */
