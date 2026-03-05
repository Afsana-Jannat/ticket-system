
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const fetchTickets = async () => {
  const res = await fetch("/ticket.json")
  return res.json()
}

function App() {
  const ticketPromise = fetchTickets()
  const [clickedTickets, setClickedTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  const handleTicket = (ticket) => {
    setClickedTickets(prev => [...prev, ticket])
  }


  const handleResolve = (ticket) => {
    setResolvedTickets(prev => prev.filter(t => t.id !== ticket.id))
    setResolvedTickets(prev => [...prev, ticket])
  }


  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      {/* banner */}
      <Banner clickedTickets={clickedTickets}
        resolvedTickets={resolvedTickets}></Banner>
      <Suspense fallback={<span className='loading loading-spinner loading-xl'></span>}>
        <CustomerTickets handleTicket={handleTicket}
          handleResolve={handleResolve}
          clickedTickets={clickedTickets} resolvedTickets={resolvedTickets}
          ticketPromise={ticketPromise} ></CustomerTickets>
      </Suspense>

      <Footer></Footer>
    </div>
  )
}

export default App


