const SkeletonLoader = () => {
  return (
    <div className="card h-[450px] animate-pulse" role="status" aria-label="Cargando...">
      <div className="h-64 bg-gray-200 rounded-t-lg skeleton-box"></div>
      <div className="p-6">
        <div className="h-6 w-24 bg-gray-200 mb-4 skeleton-box"></div>
        <div className="h-4 w-48 bg-gray-200 skeleton-box"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;