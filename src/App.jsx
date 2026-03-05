
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Navbar from './components/Navbar/Navbar'

const fetchTickets = async () => {
  const res = await fetch("/ticket.json")
  return res.json()
}

function App() {
  const ticketPromise = fetchTickets()

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      {/* banner */}
      <Banner></Banner>
      <Suspense fallback={<span className='loading loading-spinner loading-xl'></span>}>
        <CustomerTickets ticketPromise={ticketPromise}></CustomerTickets>
      </Suspense>
    </div>
  )
}

export default App
