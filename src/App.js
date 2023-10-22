import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className=" flex flex-col min-h-screen min-w-full items-center  p-2 dark:bg-zinc-800 bg-white">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
