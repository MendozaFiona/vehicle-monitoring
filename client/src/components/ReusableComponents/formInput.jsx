const FormInput = ({ data, value = undefined, onChange }) => {
  let divContent;

  const checkDataType = () => {
    if (data.dataType === "text" || "password") {
      return (
        <input
          key={data.name}
          type={data.dataType}
          id={data.name}
          name={data.name}
          value={value}
          placeholder={data.label}
          autoComplete={data.autoComplete || "on"}
          required
          onChange={onChange}
        />
      );
    } else if (data.dataType === "number") {
      <input
        key={data.name}
        type="number"
        min={data.min}
        max={data.max}
        step={data.step}
        id={data.name}
        name={data.name}
        value={value}
        placeholder={data.label}
        required
        onChange={onChange}
      />;
    }
  };

  switch (data.inputType) {
    case "input":
      divContent = checkDataType();
      break;

    case "select":
      divContent = (
        <select
          key={data.name}
          value={value}
          id={data.name}
          name={data.name}
          required
          onChange={onChange}
        >
          {data.options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      );
      break;

    default:
      break;
  }

  return (
    <label htmlFor={data.name}>
      {data.label}
      {divContent}
    </label>
  );
};

export default FormInput;
