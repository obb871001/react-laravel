import { Icon, Input } from "semantic-ui-react";

const InputCustom = ({
  type,
  name,
  onChange,
  focusProps,
  dataProps,
  setDataProps,
  onFocus,
  placeholder,
}) => {
  return (
    <Input
      onFocus={onFocus}
      iconPosition={"right"}
      className={`w-full border !border-input-border-color rounded`}
    >
      <input
        type={type}
        value={dataProps?.[name]}
        name={name}
        onChange={onChange}
        className="!bg-input-color !text-[#e2e8e3] font-bold py-[15px]"
        placeholder={placeholder ? placeholder : `Input your ${name}`}
      />
      {focusProps?.[name] && dataProps?.[name] !== "" ? (
        <Icon
          link
          className={`text-light-text`}
          name={`close`}
          onClick={() => setDataProps({ ...dataProps, [name]: "" })}
        />
      ) : null}
    </Input>
  );
};

export default InputCustom;
