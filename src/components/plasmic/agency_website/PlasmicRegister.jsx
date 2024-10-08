// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7w3AimKvhNQygAijpdB7ms
// Component: fSOoZ4T25s2x
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: XhHp-qufC92V/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 7w3AimKvhNQygAijpdB7ms/projectcss
import * as sty from "./PlasmicRegister.module.css"; // plasmic-import: fSOoZ4T25s2x/css
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 13gtm4V3y2AB/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: 5Ji1vGCP__gF/icon

createPlasmicElementProxy;

export const PlasmicRegister__VariantProps = new Array();

export const PlasmicRegister__ArgProps = new Array();

const $$ = {};

function PlasmicRegister__RenderFunc(props) {
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
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
      endIcon={
        <Icon4Icon
          className={classNames(projectcss.all, sty.svg__au5EK)}
          role={"img"}
        />
      }
      startIcon={
        <CheckSvgIcon
          className={classNames(projectcss.all, sty.svg__zsMo6)}
          role={"img"}
        />
      }
      submitsForm={true}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Register"}
      </div>
    </Button>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRegister__ArgProps,
          internalVariantPropNames: PlasmicRegister__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRegister__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRegister";
  } else {
    func.displayName = `PlasmicRegister.${nodeName}`;
  }
  return func;
}

export const PlasmicRegister = Object.assign(
  // Top-level PlasmicRegister renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicRegister
    internalVariantProps: PlasmicRegister__VariantProps,
    internalArgProps: PlasmicRegister__ArgProps
  }
);

export default PlasmicRegister;
/* prettier-ignore-end */
