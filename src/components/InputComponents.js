import { Button, Icon, Input } from "semantic-ui-react";

const InputComponents = ({
  inputProps,
  index,
  focusProps,
  dataProps,
  setDataProps,
  onFocus,
}) => {
  return (
    <section
      className={`${
        inputProps.needButton && "flex items-center justify-between"
      }  mb-[15px]`}
    >
      <Input
        onFocus={onFocus}
        key={index}
        iconPosition={"right"}
        className={`${
          inputProps.needButton ? "" : "w-full"
        } border !border-input-border-color rounded`}
      >
        <input
          type={inputProps.type}
          value={dataProps[inputProps.label]}
          name={inputProps.label}
          onChange={inputProps.onChange}
          className="!bg-input-color !text-[#e2e8e3] font-bold py-[15px]"
          placeholder={`Input your ${inputProps.label}`}
        />
        {focusProps[inputProps.label] && (
          <Icon
            link
            className={`text-light-text ${inputProps.needIcon && "!mr-[30px]"}`}
            name={`close`}
            onClick={() =>
              setDataProps({ ...dataProps, [inputProps.label]: "" })
            }
          />
        )}

        {inputProps.needIcon && (
          <Icon
            link
            onClick={inputProps.function}
            className="text-light-text"
            name={inputProps.icon1}
          />
        )}
      </Input>
      {inputProps.needButton && (
        <Button className="py-[10px]">{inputProps.buttonText}</Button>
      )}
    </section>
  );
};

export default InputComponents;
