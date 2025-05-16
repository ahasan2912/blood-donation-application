import { FaLayerGroup } from "react-icons/fa";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";

const Network = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="min-h-[30vh] rounded-xl bg-[#ece5e5] py-10">
                <h1 className="text-4xl text-center pb-8 font-semibold">We're a network of</h1>
                <div className="flex flex-col md:flex-row items-center justify-around px-4 gap-10 md:gap-0">
                    <div className="flex flex-col items-center gap-2">
                        <FaUserGroup size={32} className="text-red-500" />
                        <h1 className="text-4xl font-bold">753 Donors</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <FaLocationDot  size={32} className="text-red-500"/>
                        <h1 className="text-4xl font-bold">64 Districts</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <FaLayerGroup size={32} className="text-red-500"/>
                        <h1 className="text-4xl font-bold">8 Blood Groups</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Network;