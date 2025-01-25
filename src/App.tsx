import { useModelState } from "@anywidget/react";
import {
  Annotation,
  AriadneSelection,
  SequenceViewer,
} from "@nitro-bio/sequence-viewers";

function App() {
  const [sequences] = useModelState<string[]>("sequences");
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
      return "dark:text-brand-400 text-brand-600";
    } else if (sequenceIdx === 1) {
      return "dark:text-indigo-400 text-indigo-600";
    } else {
      return "dark:text-amber-400 text-amber-600";
    }
  };

  return (
    <div className="flex max-h-[600px] overflow-y-auto dark">
      <SequenceViewer
        sequences={sequences}
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
