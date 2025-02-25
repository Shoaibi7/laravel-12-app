export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
        <span className="mt-4 text-lg font-medium text-gray-600">
          Loading...
        </span>
      </div>
    </div>
  );
}
