interface FlagProps {
  className?: string;
}

export function SenyeraFlag({ className }: FlagProps) {
  const stripeHeight = 2 / 9;
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
      <rect width="3" height="2" fill="#FCDD09" />
      {[1, 3, 5, 7].map((i) => (
        <rect key={i} y={stripeHeight * i} width="3" height={stripeHeight} fill="#DA121A" />
      ))}
    </svg>
  );
}

export function SpainFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  );
}
