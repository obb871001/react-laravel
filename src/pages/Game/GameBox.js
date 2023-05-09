const GameBox = () => {
  return (
    <main className="flex flex-col overflow-x-hidden overflow-y-auto">
      <section
        className="relative w-full flex flex-col h-full"
        id="game-iframe"
      >
        <div className="h-[calc(100%-40px) w-full"></div>
        <div className="h-[40px] w-full"></div>
      </section>
    </main>
  );
};

export default GameBox;
