const CommonBorder = ({ notMargin }) => {
  return (
    <div
      className={`border-b border-input-border-color ${
        notMargin || "my-[15px]"
      }`}
    ></div>
  );
};

export default CommonBorder;
