import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 mt-8 text-neutral-content'>
            <div>
                <footer className="footer sm:footer-horizontal  p-10">
                    <nav>
                        <h6 className="footer-title">CS-Ticket System</h6>
                        <p>A ticketing system is a tool that organizes <br />customer support requests and automates service tasks. <br /> It converts customer queries into tickets, allowing support <br />teams to track, prioritize, and resolve them efficiently.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                </footer>
            </div>
            <aside className='text-center'>
                <p className='pb-6 text-gray-300'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;