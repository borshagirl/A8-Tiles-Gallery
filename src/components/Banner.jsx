import Link from "next/link";
import Marquee from "react-fast-marquee";


const Banner = () => {
    return (
        <div className="container mx-auto space-y-5">
            <div className="text-center py-15">
              <h1 className="text-5xl font-semibold mb-6">
                Discover Your Perfect Aesthetic
              </h1>

              <Link
                href="/all-tiles"
                className="px-6 py-3 bg-black text-white rounded-full"
              >
                Browse Now
              </Link>
            </div>

            <div className="shadow-lg rounded-md py-5 px-3">
              {/* Marquee */}
                <Marquee pauseOnHover={true} speed={130}>
                    <div className="text-gray-500">
                      New Arrivals | Modern Geometric Patterns | Join Community
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;