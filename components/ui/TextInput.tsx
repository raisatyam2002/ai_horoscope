export default function TextInput<T>({
  type,
  label,
  className,
  setState,
}: {
  type: string;
  label: string;
  className: string;
  setState: React.Dispatch<React.SetStateAction<T>>;
}) {
  return (
    <div className="flex flex-col ">
      <label className="text-white mb-2 sm:mt-0 mt-2" htmlFor={label}>
        {label}
      </label>
      <input
        className={className}
        type={type}
        id={label}
        onChange={(e: any) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}
