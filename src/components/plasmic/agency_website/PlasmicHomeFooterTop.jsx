// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7w3AimKvhNQygAijpdB7ms
// Component: SSIvXflUB2k5
import * as React from "react";
import { Link } from "gatsby";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsnU8IdsSvi2F6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nU8idsSVI2F6/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 7w3AimKvhNQygAijpdB7ms/projectcss
import * as sty from "./PlasmicHomeFooterTop.module.css"; // plasmic-import: SSIvXflUB2k5/css
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: hLWJiHtF5AVD/icon

createPlasmicElementProxy;

export const PlasmicHomeFooterTop__VariantProps = new Array();

export const PlasmicHomeFooterTop__ArgProps = new Array();

const $$ = {};

function PlasmicHomeFooterTop__RenderFunc(props) {
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
      <Stack__
        as={"div"}
        data-plasmic-name={"foreground3"}
        data-plasmic-override={overrides.foreground3}
        hasGap={true}
        className={classNames(projectcss.all, sty.foreground3)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__tzzw)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___3UaE)}>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Having a hard time exploring?"
                : "Having a hard time exploring?"}
            </h2>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6Lv6C
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Send us an email and have an advisor reach you shortly."
                : "Send us an email and have an advisor reach you shortly."}
            </div>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__tkeW)}
          >
            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              href={"mailto:info@"}
              platform={"gatsby"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__dtavN)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nn3Zc
                )}
              >
                {"FIND AN ADVISOR"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg___5QWtp)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
        </Stack__>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "foreground3", "h2", "link"],
  foreground3: ["foreground3", "h2", "link"],
  h2: ["h2"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomeFooterTop__ArgProps,
          internalVariantPropNames: PlasmicHomeFooterTop__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeFooterTop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeFooterTop";
  } else {
    func.displayName = `PlasmicHomeFooterTop.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeFooterTop = Object.assign(
  // Top-level PlasmicHomeFooterTop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicHomeFooterTop
    internalVariantProps: PlasmicHomeFooterTop__VariantProps,
    internalArgProps: PlasmicHomeFooterTop__ArgProps
  }
);

export default PlasmicHomeFooterTop;
/* prettier-ignore-end */
