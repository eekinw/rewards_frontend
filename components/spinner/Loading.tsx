export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          animation: spinner 1s linear infinite;
        }
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
