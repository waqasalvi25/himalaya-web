type SaltPouchProps = {
  tone?: "sand" | "blush" | "tube";
  label: string;
  size?: "sm" | "md" | "lg";
};

export function SaltPouch({ tone = "sand", label, size = "md" }: SaltPouchProps) {
  return (
    <div className={`him-pouch him-pouch-${tone} him-pouch-${size}`}>
      <span className="him-pouch-brand">HIMALAYA</span>
      <span className="him-pouch-window" aria-hidden="true" />
      <span className="him-pouch-label">{label}</span>
    </div>
  );
}
