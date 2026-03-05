
const Banner = () => {
    return (
        <div className="flex flex-col sm:flex-row mt-8 gap-6">
            <div className="relative rounded-md w-full h-60 
            bg-gradient-to-t from-[#9F62F2] to-[#632EE3] to-90% overflow-hidden
            ">

                <img src="/vector1.png" alt="" className="absolute bottom-0 left-0 opacity-40" />

                <div className="text-white absolute inset-0 flex flex-col items-center justify-center">
                    <h2>In-Progress</h2>
                    <h2>0</h2>
                </div>

                <img src="/vic2.jpeg" alt="" className="absolute bottom-0 right-0 opacity-30 mix-blend-screen" />

            </div>
            <div className="relative rounded-md w-full h-60 
            bg-gradient-to-t from-[#54CF68] to-[#00827A] to-90% overflow-hidden
            ">

                <img src="/vector1.png" alt="" className="absolute bottom-0 left-0 opacity-40" />

                <div className="text-white absolute inset-0 flex flex-col items-center justify-center">
                    <h2>Resolved</h2>
                    <h2>0</h2>
                </div>

                <img src="/vic2.jpeg" alt="" className="absolute bottom-0 right-0 opacity-30 mix-blend-screen" />

            </div>

        </div>
    );
};

export default Banner;