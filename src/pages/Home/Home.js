import React, { Fragment } from "react";
import Carousel from "../../components/Carousel";
import EventListSelect from "../../components/EventListSelect/EventListSelect";
import GameCatalog from "../../components/GameCatalog";
import { appName } from "../../config";
const Home = () => {
  return (
    <Fragment>
      <section className="px-common-padding-x py-common-padding-y">
        <Carousel />
        <EventListSelect />
      </section>
      <section>
        <GameCatalog
          showListCount
          mainTitle={`${appName}`}
          noWrap
          gameType={`Original`}
          Autoplay
        />
        <GameCatalog hasBottomTitle mainTitle={`Recommand`} />
      </section>
    </Fragment>
  );
};

export default Home;
