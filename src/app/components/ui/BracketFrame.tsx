type BracketFrameProps = {
  color: string;
};

export default function BracketFrame({ color }: BracketFrameProps) {
  const style = { width: 11, height: 11, borderColor: color } as React.CSSProperties;
  return (
    <>
      {/* Top-left */}
      <span
        aria-hidden
        className="pointer-events-none absolute"
        style={{ ...style, top: 16, left: 18, borderTop: `1.5px solid ${color}`, borderLeft: `1.5px solid ${color}` }}
      />
      {/* Bottom-right */}
      <span
        aria-hidden
        className="pointer-events-none absolute"
        style={{ ...style, bottom: 16, right: 18, borderBottom: `1.5px solid ${color}`, borderRight: `1.5px solid ${color}` }}
      />
    </>
  );
}
