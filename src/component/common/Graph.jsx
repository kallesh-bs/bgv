import React from "react";
import PropTypes from "prop-types";

import {
  Color,
  ClientGraphConfig,
  barConfig,
  EmployeeGraphConfig,
  ClientDashboardPieColors
} from "./CustomizeGraph";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Legend,
  PieChart,
  Pie,
  Cell,
  Label,
  AreaChart
} from "recharts";
import { COLORS } from "./CustomizeGraph";
import { BarChart, Bar } from "recharts";
import { innerData } from "../../utils/constant/GraphStaticData";

function Graph({ data, type, barSize = 45 }) {
  const generateLabel = (position = "top", opacity = "0.7") => ({
    position,
    opacity,
  });

  if(!data.length > 0){
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-xl lg:text-2xl font-semibold text-[#a9a9a9]">
                  No Data Found
        </p>
      </div>
    );
  }

  switch (type) {
  case "line":
    return (
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {Color()}
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis type="number" domain={[1, 5]} />
          <Tooltip />
          <Legend />
          <Area
            dataKey="rating"
            fill="url(#colorrating)"
            stroke="#9d58ab"
            strokeDasharray="5 5"
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  case "bar":
    return (
      <ResponsiveContainer
        width="40%"
        height="100%"
        sx={{ marginLeft: "20px" }}
      >
        <BarChart
          width={500}
          height={300}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          fill="url(#colorUv)"
          barSize={30}
          barGap={30}
        >
          {Color()}

          <YAxis type="number" domain={[1, 5]} />

          {barConfig.map(
            ({ dataKey, fill, name, shape, gap, label }, index) => (
              <Bar
                key={index}
                dataKey={dataKey}
                fill={`url(${fill})`}
                name={name}
                shape={shape}
                gap={gap}
                label={generateLabel(label.position, label.opacity)}
              />
            )
          )}
        </BarChart>
        <div className="text-[black] font-['Roboto'] font-normal flex justify-center mt-3">
            Your Average
        </div>
      </ResponsiveContainer>
    );
  case "averagebar":
    return (
      <ResponsiveContainer width="40%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          fill="url(#colorUv)"
          barSize={30}
          barGap={30}
        >
          {Color()}
          {barConfig.map(
            ({ dataKey, fill, name, shape, gap, label }, index) => (
              <Bar
                key={index}
                dataKey={dataKey}
                fill={`url(${fill})`}
                name={name}
                shape={shape}
                gap={gap}
                label={generateLabel(label.position, label.opacity)}
              />
            )
          )}
        </BarChart>
        <div className="text-[black] font-['Roboto'] font-normal flex justify-center mt-3">
            Total Average
        </div>
      </ResponsiveContainer>
    );

  case "pie":
    return (
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="60%"
            cy="80%"
            startAngle={180}
            endAngle={0}
            innerRadius="110%"
            outerRadius="130%"
            paddingAngle={1}
            dataKey="value"
            cornerRadius={50}
          >
            {data?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={`${data?.reduce((sum, entry) => sum + entry.value, 0)}`}
              position="center"
              fontSize={40}
              fill="#031B59"
            />
          </Pie>
          <Pie
            data={innerData}
            cx="60%"
            cy="70%"
            startAngle={180}
            endAngle={0}
            innerRadius="78%"
            outerRadius="80%"
            paddingAngle={6}
            dataKey="value"
          >
            {innerData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#505050" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );

  case "Clientgraph":
    return (
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey={"month"}
            ticks={["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"]}
            axisLine={false}
            tick={{ fill: 'black' }}
          />
          <YAxis axisLine={false}
            tick={{ fill: 'black' }} />
          <Tooltip />
          <Legend
            iconType="circle"
            formatter={(value) => {
              return (
                <span style={{ textTransform: "capitalize" }}>{value}</span>
              );
            }}
          />
          {ClientGraphConfig.map((area, index) => (
            <Area
              key={index}
              type="monotone"
              strokeWidth={5}
              dot={area.dot}
              {...area}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );

  case "Employeegraph":
    return (
      <ResponsiveContainer >
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <Legend
            iconType="circle"
            formatter={(value) => {
              return (
                <span style={{ textTransform: "capitalize" }}>{value}</span>
              );
            }}
          />
          <XAxis
            dataKey={"Month"}
            ticks={["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"]}
            axisLine={false}
            tick={{ fill: 'black' }}
          />
          <YAxis axisLine={false} tick={{ fill: 'black' }}/>
          <Tooltip />
          {EmployeeGraphConfig.map((area, index) => (
            <Area
              key={index}
              type="monotone"
              strokeWidth={5}
              dot={area.dot}
              {...area}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );

  case "RevenueGraph": {
    return (
      <ResponsiveContainer>
        <BarChart
          data={data}
          barSize={barSize}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="Title" axisLine={false} tick={{ fill: 'black' }} />
          <YAxis type="number" axisLine={false} tick={{ fill: 'black' }} />
          <Tooltip />
          {Color()}
          <Bar
            dataKey="Expenses"
            stackId="a"
            fill="#F6CF7D"
            background={{ fill: "url(#adminbarstripe)" }}
          ></Bar>
          <Bar
            dataKey="Earnings"
            stackId="a"
            fill="#F7AAED"
            isAnimationActive={false}
            background={{ fill: "url(#adminbarstripe)" }}
          ></Bar>
          <Bar
            dataKey="Revenue"
            radius={4}
            stackId="a"
            fill="#B6B0FB"
            isAnimationActive={false}
            background={{ fill: "url(#adminbarstripe)" }}
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  case "WorkingHourGraph": {
    return (
      <ResponsiveContainer>
        <BarChart
          data={data}
          barSize={9}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" axisLine={false} tick={{ fill: 'black' }} />
          <YAxis axisLine={false} tick={{ fill: 'black' }} />
          <Tooltip />
          <Legend
            iconType="circle"
            formatter={(value) => {
              const color = "black";

              return <span style={{ color,textTransform: "capitalize" }}>{value}</span>;
            }}
          />
          <Bar dataKey="Billable Hours" fill="#5A6ACF" />
          <Bar dataKey="Non Billable Hours" fill="#c0c1c2" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  case "ClientMonthlyDashboardGraph": {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" tick={{ fill: 'black' }} />
          <YAxis type="number" tick={{ fill: 'black' }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#031B59"
            fill="#F8FFFF"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  case "ClientDashboardPieGraph": {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={105}
            fill="#8884D8"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  ClientDashboardPieColors[
                    index % ClientDashboardPieColors.length
                  ]
                }
              />
            ))}
            <Label value="$73,673" position="center" fill="#031B59" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
  default:
    break;
  }
}
Graph.propTypes = {
  data: PropTypes.any,
  barSize: PropTypes.any,
  changeTicks: PropTypes.any,
  type: PropTypes.any,
};

export default Graph;
