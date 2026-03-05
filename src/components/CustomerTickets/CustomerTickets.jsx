import React, { use } from 'react';

const CustomerTickets = ({ ticketPromise }) => {
    const ticketData = use(ticketPromise)
    console.log(ticketData)
    return (
        <div className='flex flex-col sm:flex-row gap-6 mt-8'>
            <div>
                <div className=''>
                    <h2 className='text-gray-600 font-bold'>Customer Tickets</h2>
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