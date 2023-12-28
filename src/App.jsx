import Footer from "./UI/Footer";
import Header from "./UI/Header";
import GameBoard from "./UI/GameBoard";

function App() {
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-between bg-violet-800 text-purple-50">
        <Header />
        <GameBoard />
        <Footer />
      </div>
    </>
  );
}

export default App;
