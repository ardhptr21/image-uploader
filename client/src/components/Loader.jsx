export default function Loader() {
  return (
    <div className="shadow-md w-full max-w-md p-5 rounded-lg space-y-5">
      <h1 className="text-xl">Uploading...</h1>
      <div className="w-full h-2 rounded-md bg-gray-200 overflow-hidden">
        <div className="w-1/4 h-full bg-blue-500 rounded-md loader"></div>
      </div>
    </div>
  );
}
