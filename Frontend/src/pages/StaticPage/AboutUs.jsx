
const AboutUs = () => {
    return (
        <div className="pt-16">
            {/* Clip-path header */}
            <div className="bg-[#EB2C2926] h-[450px] py-10" style={{ clipPath: 'polygon(100% 0, 100% 38%, 34% 30%, 0 40%, 0 0)' }}>
                <div className="max-w-7xl mx-auto px-3">
                    <h1 className="text-4xl font-bold text-gray-700">About Us</h1>
                    <p className="text-lg pt-1">Know about Blood Bank DIU. What, how, and why?</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto -mt-60 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-3">
                {/* Left side content */}
                <div className="space-y-6">
                    <p className="text-justify">
                        Blood Bank DIU is a smart, automated blood donation platform designed for the Daffodil International University community. It connects voluntary blood donors with patients in urgent need using SMS, email, and web technologies. This free service ensures quick and reliable communication between donors and recipients, minimizing delays during critical moments. Many students and staff are willing to donate blood, but a communication gap often prevents timely help. Blood Bank DIU bridges that gap, promoting voluntary blood donation and making sure that no one within the DIU campus faces a life-threatening emergency due to the unavailability of safe and timely blood. DIU Blood Bank started its journey in 2018.
                    </p>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Why DIU Blood Bank?</h2>
                        <p className="text-justify">
                            Though Bangladesh has more than 160 million people, the number of safe blood banks is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood is needed essentially. As a result, people fall in real trouble to manage blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. The communication gap is resulting in the loss of many lives.
                        </p>
                        <p className="mt-2">
                            Rokto comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email. As Rokto services can also be availed by SMS, people from any class of the society can easily avail of Rokto services.
                        </p>
                    </div>
                </div>

                {/* Right side content */}
                <div className="px-2 space-y-0 md:space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold">Vision</h2>
                        <p>Ensuring no more death just for the need of blood</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Mission</h2>
                        <p>
                            Connecting blood searchers with voluntary blood donors in a moment with the use of technology.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Objectives</h2>
                        <ul className="list-disc px-4 space-y-1">
                            <li>Encouraging voluntary blood donation</li>
                            <li>Creating awareness about safe blood transfer</li>
                            <li>Enabling people to place blood requests via SMS, website, or Facebook</li>
                            <li>Connecting voluntary blood donors via SMS or email</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Why it Matters for DIU:</h1>
                        <p className="text-justify">Blood Bank DIU goes beyond being a digital service—it builds a stronger, more compassionate university community. By encouraging voluntary blood donation, it fosters a sense of social responsibility and unity among students, faculty, and staff. In emergencies, this platform can save lives within minutes, proving the power of collective action and technology. It empowers students to be real-life heroes and creates a culture of care on campus. Moreover, Blood Bank DIU sets a powerful example that can inspire other universities across Bangladesh to adopt similar life-saving systems, extending the impact well beyond the DIU campus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

<div className="pt-16">

    <div className="-mt-60 max-w-7xl mx-auto px-3 sm:px-6">
        <div>
            <p className="text-justify text-lg">Blood Bank DIU is an innovative, automated blood service platform designed exclusively for the Daffodil International University (DIU) community. It aims to bridge the gap between voluntary blood donors and recipients in urgent need by leveraging the power of technology. Through SMS, email, and web integration, this system enables instant communication, allowing blood to be arranged within moments. Whether it's a medical emergency, surgery, or an accident, Blood Bank DIU is there to respond swiftly and efficiently. <br></br>

                Despite having thousands of students and staff, many people at DIU still struggle to find blood when needed. On the other hand, many individuals are willing to donate but are unaware of who needs help. Blood Bank DIU solves this communication gap by creating a central platform where donors and recipients are connected seamlessly.<br></br>

                The service is completely free, inclusive, and easy to use. Users can request or register for blood donations via the website or SMS, making it accessible even without internet access. Blood Bank DIU’s mission is to ensure no one at DIU suffers due to a lack of timely blood availability. It promotes voluntary blood donation, raises awareness, and builds a stronger, life-saving network within the DIU family.</p>
        </div>
        <div></div>
    </div>
</div>