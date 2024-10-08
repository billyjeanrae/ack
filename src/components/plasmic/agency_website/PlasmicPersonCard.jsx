// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7w3AimKvhNQygAijpdB7ms
// Component: QgboW6bvwtkf
import * as React from "react";
import { Link } from "gatsby";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 7w3AimKvhNQygAijpdB7ms/projectcss
import * as sty from "./PlasmicPersonCard.module.css"; // plasmic-import: QgboW6bvwtkf/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: -OJzIcs60s6K/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: BTvJmF2e8gkf/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: MauwfSulyWfi/icon
import team2Jpg2EZNwYdTxphEb from "./images/team2Jpg2.jpg"; // plasmic-import: eZNwYdTxphEb/picture

createPlasmicElementProxy;

export const PlasmicPersonCard__VariantProps = new Array();

export const PlasmicPersonCard__ArgProps = new Array(
  "children",
  "slot",
  "image",
  "slot2"
);

const $$ = {};

function PlasmicPersonCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          image: {
            src: team2Jpg2EZNwYdTxphEb,
            fullWidth: 400,
            fullHeight: 400,
            aspectRatio: undefined
          }
        },
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
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"336px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        loading={"lazy"}
        src={args.image}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___0J2FB)}
      >
        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(projectcss.all, projectcss.h1, sty.h1)}
        >
          {renderPlasmicSlot({
            defaultContents: "Becca Kingsman",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </h1>
        <div className={classNames(projectcss.all, sty.freeBox__nu1Gi)}>
          {renderPlasmicSlot({
            defaultContents: "Job title",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vDywk)}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___6Kot
                  )}
                  component={Link}
                  href={`/`}
                  platform={"gatsby"}
                >
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___19LnE)}
                    href={"https://www.linkedin.com/"}
                    link={"https://www.linkedin.com/"}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__tXamg
                  )}
                  component={Link}
                  href={`/`}
                  platform={"gatsby"}
                >
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__jm8Pm)}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__qFj57
                  )}
                  component={Link}
                  href={`/`}
                  platform={"gatsby"}
                >
                  <Icon3Icon
                    className={classNames(projectcss.all, sty.svg__i4UIx)}
                    role={"img"}
                  />
                </PlasmicLink__>
              </React.Fragment>
            ),

            value: args.slot2
          })}
        </Stack__>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "h1"],
  img: ["img"],
  h1: ["h1"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPersonCard__ArgProps,
          internalVariantPropNames: PlasmicPersonCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPersonCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonCard";
  } else {
    func.displayName = `PlasmicPersonCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonCard = Object.assign(
  // Top-level PlasmicPersonCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    // Metadata about props expected for PlasmicPersonCard
    internalVariantProps: PlasmicPersonCard__VariantProps,
    internalArgProps: PlasmicPersonCard__ArgProps
  }
);

export default PlasmicPersonCard;
/* prettier-ignore-end */
