type FilterChipProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={[
        'rounded-sm border px-2 py-1 ty-body2  transition-colors duration-200',
        isActive
          ? 'bg-black text-beige'
          : 'bg-transparent text-black border-black hover:border-beige hover:bg-beige/10',
      ].join(' ')}
    >
      {label}
    </button>
  );
}
