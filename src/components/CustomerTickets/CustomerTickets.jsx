import React, { use } from 'react';
import { CiCalendar } from "react-icons/ci";

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
                        ticketData.map(ticket =>
                            <div key={ticket.id}>
                                <div className="card mt-6 shadow-xl bg-gray-50 card-xs">
                                    <div className="card-body">
                                        <div className='flex justify-between'>
                                            <h2 className="card-title">{ticket.title}</h2>
                                            {/* status part */}
                                            <span
                                                className={`flex items-center gap-1 px-2 py-1 rounded-full
                                            ${ticket.status === "Open"
                                                        ? "bg-green-100 text-green-600"
                                                        : ticket.status === "In-Progress"
                                                            ? "bg-yellow-100 text-yellow-600"
                                                            : "bg-blue-100 text-blue-600"
                                                    }`}
                                            >
                                                <span
                                                    className={`w-2 h-2 rounded-full
                                            ${ticket.status === "Open"
                                                            ? "bg-green-500"
                                                            : ticket.status === "In-Progress"
                                                                ? "bg-yellow-500"
                                                                : "bg-blue-500"
                                                        }`}
                                                ></span>

                                                {ticket.status}
                                            </span>
                                        </div>
                                        <p>{ticket.description}</p>
                                        <div className='flex gap-3 justify-between'>
                                            <div className='flex gap-4'>
                                                <h2 className='text-gray-500'>#{ticket.id}</h2>
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
                                                <h2 className='text-gray-500'>{ticket.customer}</h2>
                                                <h2 className='text-gray-400 flex gap-1'><CiCalendar className='text-sm text-gray-500' />{ticket.createdAt}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>

            </div>

            {/* counting section */}
            <div>
                <div>
                    <h2 className='text-gray-600 font-bold'>Ticket Status</h2>
                    <span className='text-gray-500 text-sm'>Select a ticket to add to Task status</span>
                </div>
                <div>
                    <h2 className='text-gray-600 mt-6 font-bold'>Resolved Task</h2>
                    <span className='text-gray-500 text-sm'>No resolved task yet.</span>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;