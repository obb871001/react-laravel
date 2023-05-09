import { useState } from "react";
import { Button, Icon, Input } from "semantic-ui-react";

import InputComponents from "../../components/InputComponents/InputComponents";

const MailSignup = () => {
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
      onFocus: (e) => setDataFocus({ [e.target.name]: true }),
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
      onFocus: (e) => setDataFocus({ [e.target.name]: true }),
    },
    {
      label: "phone number",
      type: "number",
      onChange: (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      },
      onFocus: (e) => setDataFocus({ [e.target.name]: true }),
    },
    {
      label: "sms code",
      type: "text",
      needButton: true,
      buttonText: "Send sms",
      onChange: (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      },
      onFocus: (e) => setDataFocus({ [e.target.name]: true }),
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
            onFocus={(e) => setDataFocus({ [e.target.name]: true })}
          />
        );
      })}
      <Button className="w-full !bg-main-color !mt-[30px]">Sign up</Button>
    </section>
  );
};

export default MailSignup;
