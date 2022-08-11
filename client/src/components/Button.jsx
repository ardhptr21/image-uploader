export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className={`bg-blue-500 px-10 py-3 rounded-lg text-white${className ? ` ${className}` : ''}`}>
      {children}
    </button>
  );
}
