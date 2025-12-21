import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import QuoteTable from './components/QuoteTable'
import QuoteCard from './components/QuoteCard'
import { Quote } from 'lucide-react'
import Header from './components/Header'


interface Quote {
  _id?: string;
  text: string;
  author: string;
  category: string;
}

function App() {


  return (
    <>
<Header />
     <Banner />
    <QuoteCard quote={Quote} />
     <QuoteTable />
    <Footer/>
   
       
    </>
  )
}

export default App
