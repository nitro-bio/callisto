import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./styles.css";

const render = createRender(() => {
  const [value, setValue] = useModelState<number>("value");
  return (
    <div className="anywidget_latest">
      <button onClick={() => setValue(value + 1)}>count is {value}</button>
    </div>
  );
});

export default { render };
