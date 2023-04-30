import React, { Fragment } from "react";
import Carousel from "../../components/Carousel";
import EventListSelect from "../../components/EventListSelect";
import GameCatalog from "../../components/GameCatalog";
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
          mainTitle={`911`}
          noWrap
          gameType={`Original`}
        />
        <GameCatalog hasBottomTitle mainTitle={`Recommand`} />
      </section>
    </Fragment>
  );
};

export default Home;
