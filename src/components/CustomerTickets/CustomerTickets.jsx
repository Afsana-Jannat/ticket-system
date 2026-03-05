import React, { use } from 'react';

const CustomerTickets = ({ ticketPromise }) => {
    const ticketData = use(ticketPromise)
    console.log(ticketData)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            <div className='col-span-2'>
                <div className=''>
                    <h2 className='text-gray-600 font-bold'>Customer Tickets</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
                    {
                        ticketData.map(ticket => <div>
                            <div className="card mt-6 shadow-xl bg-gray-50 card-xs">
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title">{ticket.title}</h2>
                                        <span className='rounded-md pl-4 pr-4 bg-green-200'>{ticket.status}</span>
                                    </div>
                                    <p>{ticket.description}</p>
                                    <div className='flex gap-3 justify-between'>
                                        <div className='flex gap-4'>
                                            <h2>#{ticket.id}</h2>
                                            <span
                                                className={`font-semibold
                                                ${ticket.priority === "High"
                                                        ? "text-red-500"
                                                        : ticket.priority === "Medium"
                                                            ? "text-yellow-500"
                                                            : "text-green-500"
                                                    }`}
                                            >
                                                {ticket.priority}
                                            </span>
                                        </div>
                                        <div className='flex gap-4'>
                                            <h2>{ticket.customer}</h2>
                                            <h2>{ticket.createdAt}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>

            {/* counting section */}
            <div className='text-gray-600 font-bold'>
                <h2>Ticket Status</h2>
            </div>
        </div>
    );
};

export default CustomerTickets;