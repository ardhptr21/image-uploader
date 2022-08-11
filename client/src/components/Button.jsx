export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`bg-blue-500 hover:bg-blue-600 transition duration-300 active:scale-90 transform px-10 py-3 rounded-lg text-white${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </button>
  );
}
