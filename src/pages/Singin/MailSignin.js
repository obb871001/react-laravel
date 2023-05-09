import { useState } from "react";
import { Button, Icon, Input } from "semantic-ui-react";

import InputComponents from "../../components/InputComponents/InputComponents";

const MailSignin = () => {
  const [watchPassword, setWatchPassword] = useState(false);
  const [data, setData] = useState({});
  const [dataFocus, setDataFocus] = useState({});

  const inputList = [
    {
      label: "e-mail",
      type: "text",
      onChange: (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      },
    },
    {
      label: "password",
      type: watchPassword ? "text" : "password",
      needIcon: true,
      icon1: watchPassword ? "eye slash" : "eye",
      function: () => setWatchPassword(!watchPassword),
      onChange: (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      },
    },
  ];

  return (
    <section>
      {inputList.map((input, index) => {
        return (
          <InputComponents
            focusProps={dataFocus}
            dataProps={data}
            setDataProps={setData}
            inputProps={input}
            index={index}
          />
        );
      })}
      <Button className="w-full !bg-main-color !mt-[30px]">Sign in</Button>
    </section>
  );
};

export default MailSignin;
