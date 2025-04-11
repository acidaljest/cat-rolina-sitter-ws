const SkeletonLoader = () => {
  return (
    <div className="card h-[450px] animate-pulse" role="status" aria-label="Cargando...">
      <div className="h-64 bg-[#e1d5c5] rounded-t-lg skeleton-box"></div>
      <div className="p-6 bg-[#f9f5f1]">
        <div className="h-6 w-24 bg-[#e1d5c5] mb-4 skeleton-box"></div>
        <div className="h-4 w-48 bg-[#e1d5c5] skeleton-box"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;