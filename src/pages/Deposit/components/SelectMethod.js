const SelectMethod = ({ method, setChooseCurrency, setDepositStep }) => {
  return (
    <div
      className="px-[24px] py-[10px] bg-third-color rounded-xl flex items-center justify-between"
      onClick={() => {
        setChooseCurrency(method);
        setDepositStep(2);
      }}
    >
      <p className="text-light-white font-bold">{method}</p>
    </div>
  );
};

export default SelectMethod;
