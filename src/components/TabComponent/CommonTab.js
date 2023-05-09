const CommonTab = ({ key, setTab, tab, value, label }) => {
  return (
    <div
      key={key}
      onClick={() => setTab(value)}
      className={`max-w-[50%] w-full text-lg cursor-pointer ${
        tab === value
          ? "text-light-white border-b-2 border-main-color"
          : "text-light-text"
      } font-semibold`}
    >
      <p className="text-center pb-[10px] ">{label}</p>
    </div>
  );
};

export default CommonTab;
