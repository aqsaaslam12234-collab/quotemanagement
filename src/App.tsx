import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import QuoteCard from "./components/QuoteCard";
import QuoteTable from "./components/QuoteTable";
import Header from "./components/Header";

// interface Quote {
//   _id?: string;
//   text: string;
//   author: string;
//   category: string;
// }

function App() {
  return (
    <>
      <Header onAddClick={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Banner />
      <QuoteCard/>
      <QuoteTable />
      <Footer />
    </>
  );
}

export default App;
