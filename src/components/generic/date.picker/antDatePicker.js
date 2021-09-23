import react, { useState } from "react";
import { Button, DatePicker } from "antd";
import moment from "moment";

export default function DateSelect({ fullWidth }) {
  const RangePicker = DatePicker.RangePicker;
  const dateFormat = "YYYY/MM/DD";
  const [currentDate, setCurrentDate] = useState(moment().format(dateFormat));

  return (
    <div>
      <div className="label" style={{ color: "#3C4B64" }}>
        <strong>Select Date Range</strong>
      </div>
      <RangePicker
        style={{
          width: fullWidth ? "100%" : "",
          marginTop: "10px",
          padding: "5px",
          borderColor: "#a30000",
        }}
        defaultValue={[
          moment(currentDate, dateFormat),
          moment(currentDate, dateFormat),
        ]}
        format={dateFormat}
      />
    </div>
  );
}
