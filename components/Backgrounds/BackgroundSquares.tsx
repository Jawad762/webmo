import { Fragment } from "react";

export default function BackgroundSquares() {
  return (
    <div className="absolute inset-0 grid w-full h-full overflow-hidden border-t border-l border-[#2e2e2e] bg-black -z-10 _squares-grid">
      {Array(12).fill(0).map((_e, i) => (
        <Fragment key={i}>
        {Array(12).fill(0).map((_e, i) => (
          <div key={i} className="border-b border-r border-[#2e2e2e] h-full w-full bg-black"></div>
        ))}
        </Fragment>
      ))}
    </div>
  );
}
