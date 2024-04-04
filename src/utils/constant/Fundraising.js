import React from "react";
import ContinuousSvg from "svgComponents/ContinuousSvg";
import IterationSvg from "svgComponents/IterationSvg";
import ResponsiveSvg from "svgComponents/ResponsiveSvg";
import SaveTime from "svgComponents/SaveTimeSvg";
import SupportSvg from "svgComponents/SupportSvg";
import TechSvg from "svgComponents/TechSvg";

const Fundraising = [
  {
    path: 'fundraising-software-development',
    heading: 'customFundraising',
    data: [
      {
        id: 1,
        img: <SaveTime />,
        title: 'saveTime',
        brief: 'saveTimeBrief',
      },
      {
        id: 2,
        img: <TechSvg/>,
        title: 'techExcellence',
        brief: 'techBrief',
      },
      {
        id: 3,
        img: <ContinuousSvg/>,
        title: 'totalAdjust',
        brief: 'adjustBrief',
      },
    ],
  },
  {
    path: 'hr-portal-development',
    heading: 'humanResource',
    data: [
      {
        id: 1,
        img: <SaveTime />,
        title: 'fullCycle',
        brief: 'fullCycleBrief',
      },
      {
        id: 2,
        img: <TechSvg/>,
        title: 'leadingEdge',
        brief: 'leadingEdgeBrief',
      },
      {
        id: 3,
        img: <ContinuousSvg/>,
        title: 'otherSystem',
        brief: 'otherSystemBrief',
      },
      {
        id: 4,
        img: <ResponsiveSvg/>,
        title: 'crossDevice',
        brief: 'crossDeviceBrief',
      },
      {
        id: 5,
        img: <IterationSvg/>,
        title: 'agile',
        brief: 'agileBrief',
      },
      {
        id: 6,
        img: <SupportSvg/>,
        title: 'support',
        brief: 'supportBrief',
      },
    ],
  },

];

export default Fundraising;
