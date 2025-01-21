import {
  Annotation,
  AriadneSelection,
  SequenceViewer,
} from "@nitro-bio/sequence-viewers";
import { useModelState } from "@anywidget/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [selection, setSelection] = useModelState<AriadneSelection | null>(
    "selection",
  );
  const annotations: Annotation[] = [
    {
      text: "example",
      type: "CDS",
      direction: "forward",
      start: 10,
      end: 200,
      className: "bg-amber-600 text-white",
    },
    {
      text: "example",
      type: "foo",
      direction: "reverse",
      start: 300,
      end: 20,
      className: "bg-rose-600 text-white",
    },
  ];
  const charClassName = ({ sequenceIdx }: { sequenceIdx: number }) => {
    if (sequenceIdx === 0) {
      return "text-brand-600";
    } else if (sequenceIdx === 1) {
      return "text-indigo-600";
    } else {
      return "text-amber-600";
    }
  };

  return (
    <div className="flex max-h-[600px] overflow-y-auto">
      <SequenceViewer
        sequences={[
          "ATGC".repeat(100),
          " ".repeat(30) + "ATGC".repeat(20),
          " ".repeat(80) + "ATGC".repeat(70),
        ]}
        annotations={annotations}
        selection={selection}
        setSelection={setSelection}
        charClassName={charClassName}
        selectionClassName="relative after:bg-brand-400/20 after:absolute after:-left-px after:right-0 after:inset-y-0 after:z-[-1]"
        noValidate
      />
    </div>
  );
}

export default App;
