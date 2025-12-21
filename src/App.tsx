import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import QuoteTable from "./components/QuoteTable";
import QuoteCard from "./components/QuoteCard";
import Header from "./components/Header";

interface Quote {
  _id?: string;
  text: string;
  author: string;
  category: string;
}

function App() {
  return (
    <>
      <Header onAddClick={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Banner />
      <QuoteCard quote={undefined} />
      <QuoteTable />
      <Footer />
    </>
  );
}

export default App;
