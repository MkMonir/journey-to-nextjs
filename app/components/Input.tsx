interface Props {
  id: string;
  placeholder: string;
  type: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
}

const Input = ({
  id,
  placeholder,
  type,
  label,
  handleChange,
  value,
}: Props) => {
  return (
    <div>
      {/* =========================================== Input Component ===================================*/}

      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
