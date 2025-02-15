export function ProjectsLoading() {
  return (
    <div className="container mx-auto py-8 opacity-10">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="h-64 bg-gray-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    </div>
  );
} 