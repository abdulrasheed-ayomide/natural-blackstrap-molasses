export default function Loader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-accent border-t-primary" />
        </div>
        <span className="font-label text-sm text-bark/60 dark:text-cream/60">Loading…</span>
      </div>
    </div>
  );
}
