import React from "react";
import { CURRENCY_SYMBOL } from "../../../constant";

const Record = ({ gameName, bettingTime, bet, winLose }) => {
  return (
    <div className="border-b border-input-border-color py-common-padding-y px-common-padding-x">
      <p className="text-main-color text-lg font-bold mb-[7px]">{gameName}</p>
      <div className="flex justify-between">
        <div className="flex flex-col text-light-text">
          <p className="text-sm mb-[5px]">Betting time</p>
          <p className="text-lg">{bettingTime}</p>
        </div>
        <div className="flex flex-col text-light-text">
          <p className="text-sm mb-[5px]">Bet</p>
          <p className="text-lg">{bet}</p>
        </div>

        <div className="flex flex-col text-light-text">
          <p className="text-sm mb-[5px]">Win/Lose</p>
          <p className="text-lg">
            {CURRENCY_SYMBOL} {winLose}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Record;
