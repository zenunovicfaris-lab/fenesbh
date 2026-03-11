export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Navbar placeholder */}
      <div className="h-20 bg-brand-lightgray/50" />

      {/* Breadcrumb */}
      <div className="bg-brand-offwhite border-b border-brand-lightgray py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-3 w-56 bg-brand-lightgray rounded" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="h-[50vh] min-h-[360px] bg-brand-lightgray" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <div className="h-8 w-48 bg-brand-lightgray rounded" />
            <div className="h-4 w-full bg-brand-lightgray rounded" />
            <div className="h-4 w-5/6 bg-brand-lightgray rounded" />
            <div className="h-4 w-4/6 bg-brand-lightgray rounded" />
            <div className="h-4 w-full bg-brand-lightgray rounded" />
            <div className="h-4 w-3/4 bg-brand-lightgray rounded" />
            <div className="mt-6 h-7 w-56 bg-brand-lightgray rounded" />
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-lightgray flex-shrink-0" />
                <div className="h-4 flex-1 bg-brand-lightgray rounded" />
              </div>
            ))}
            <div className="mt-8 h-7 w-56 bg-brand-lightgray rounded" />
            <div className="h-[200px] bg-brand-lightgray rounded-lg" />
          </div>

          {/* Right sidebar */}
          <div>
            <div className="bg-brand-lightgray/30 rounded-xl border-t-4 border-brand-lightgray p-6 flex flex-col gap-4">
              <div className="h-6 w-40 bg-brand-lightgray rounded" />
              <div className="h-10 bg-brand-lightgray rounded" />
              <div className="h-10 bg-brand-lightgray rounded" />
              <div className="h-24 bg-brand-lightgray rounded" />
              <div className="h-10 bg-brand-lightgray rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
