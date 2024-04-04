import React from "react";
import PropTypes from "prop-types";

export function Color() {
  return (
    <defs>
      <linearGradient id="colorUv0" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#406CF2" />
        <stop offset="1" stopColor="#069DF4" stopOpacity="0" />
      </linearGradient>

      <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#C30931" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#ecdce0" stopOpacity={0} />
      </linearGradient>

      <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#248BA8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#c7e9f2" stopOpacity={0} />
      </linearGradient>

      <linearGradient id="colorrating" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#c6b2e3" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#B086F0" stopOpacity={0} />
      </linearGradient>

      <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#E6E5FB" stopOpacity={0.5} />
        <stop offset="80%" stopColor="#E6E5FB" stopOpacity={0} />
        <pattern
          id="diagonal-stripe"
          width="10"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="4"
            stroke="#E6E5FB"
            fill="url(#totalGradient)"
            strokeWidth="3"
          />
        </pattern>
      </linearGradient>
      <pattern
        id="adminbarstripe"
        width="5"
        height="4"
        patternUnits="userSpaceOnUse"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="4"
          stroke="#E6E5FB"
          fill="#FFFFFF"
          strokeWidth="4"
        />
      </pattern>
    </defs>
  );
}

export const getRoundedRectPath = (x, y, width, height, radius) => {
  return `M${x + radius},${y}
          L${x + width - radius},${y}
          Q${x + width},${y} ${x + width},${y + radius}
          L${x + width},${y + height - radius}
          Q${x + width},${y + height} ${x + width - radius},${y + height}
          L${x + radius},${y + height}
          Q${x},${y + height} ${x},${y + height - radius}
          L${x},${y + radius}
          Q${x},${y} ${x + radius},${y}
          Z`;
};

export const RoundedRectBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 15;

  return (
    <path
      d={getRoundedRectPath(x, y, width, height, radius)}
      stroke="none"
      fill={fill}
    />
  );
};
RoundedRectBar.propTypes = {
  fill: PropTypes.any,
  x: PropTypes.any,
  y: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
};

export const COLORS = ["#75C57F", "#F6CF7D", "#FFBB28", "#D76B66"];

export const ClientGraphConfig = [
  {
    dataKey: "Total",
    stroke: "#978FED",
    fill: "url(#diagonal-stripe)",
    dot: false,
  },
  { dataKey: "Active", stroke: "#5AA5CF", fill: "transparent", dot: false },
  { dataKey: "Inactive", stroke: "#F6CF7D", fill: "transparent", dot: false },
];

export const EmployeeGraphConfig = [
  {
    dataKey: "Total",
    stroke: "#978FED",
    fill: "url(#diagonal-stripe)",
    dot: false,
  },
  { dataKey: "Active", stroke: "#5AA5CF", fill: "transparent", dot: false },
  { dataKey: "Inactive", stroke: "#F6CF7D", fill: "transparent", dot: false },
];

export const barConfig = [
  {
    dataKey: "punchtualityRatings",
    fill: "#colorUv0",
    name: "punchtualityRatings",
    shape: <RoundedRectBar />,
    gap: 5,
    label: { position: "top", opacity: "0.7" },
  },
  {
    dataKey: "behaviourRatings",
    fill: "#colorUv1",
    name: "behaviourRatings",
    shape: <RoundedRectBar />,
    gap: 5,
    label: { position: "top", opacity: "0.7" },
  },
  {
    dataKey: "productivityRatings",
    fill: "#colorUv2",
    name: "productivityRatings",
    shape: <RoundedRectBar />,
    gap: 5,
    label: { position: "top", opacity: "0.7" },
  },

];

export const ClientDashboardPieColors = ['#FF7914', '#7C93D6', '#00CE15'];
