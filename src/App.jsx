import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full">
        <div className="w-full absolute h-[40rem] bg-silver -z-10"></div>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
