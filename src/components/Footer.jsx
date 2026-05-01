import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  TileGallery
                </h2>
                <p className="text-gray-500 text-sm">
                  Discover premium tiles with modern aesthetic designs.
                  Build your dream space with style.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm font-semibold">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/all-tiles">All Tiles</Link></li>
                  <li><Link href="/my-profile">My Profile</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-500 text-sm">
                  Email: support@tilegallery.com
                </p>
                <p className="text-gray-500 text-sm">
                  Phone: +880 1234-567890
                </p>

                <div className="flex gap-4 mt-4">
                  <a className="text-gray-500 hover:text-green-800">
                    Facebook
                  </a>
                  <a className="text-gray-500 hover:text-green-800">
                    Instagram
                  </a>
                  <a className="text-gray-500 hover:text-green-800">
                    Twitter
                  </a>
                </div>
              </div>

            </div>

            <div className="text-center text-sm text-gray-400 pb-6">
              © 2026 TileGallery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;