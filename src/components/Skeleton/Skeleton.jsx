export function ProductCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card dark:bg-white/5">
      <div className="skeleton h-56 w-full" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="skeleton h-3 w-16 rounded-full" />
        <div className="skeleton h-5 w-3/4 rounded-full" />
        <div className="skeleton h-4 w-1/2 rounded-full" />
        <div className="skeleton h-10 w-full rounded-full mt-2" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
