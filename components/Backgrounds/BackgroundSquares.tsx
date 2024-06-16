export default function BackgroundSquares() {
  return (
    <div className="absolute inset-0 grid w-full h-full overflow-hidden border-t border-l border-[#2e2e2e] bg-black -z-10 _squares-grid">
      {Array(10).fill(0).map(_e => (
        Array(12).fill(0).map(_e => (
          <div className="border-b border-r border-[#2e2e2e] h-full w-full bg-black pt-[100%]"></div>
        ))
      ))}
    </div>
  );
}
