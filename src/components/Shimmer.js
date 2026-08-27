const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-gray-50 pt-2">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden h-80 animate-pulse"
            >
              <div className="w-full h-48 bg-primary/20"></div>
              <div className="p-4">
                <div className="h-4 bg-primary/20 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-primary/20 rounded mb-2 w-1/2"></div>
                <div className="h-3 bg-primary/20 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
