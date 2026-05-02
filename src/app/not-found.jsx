
import Link from 'next/link';

const NotFound = () => {
    return (
       <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-8xl font-extrabold tracking-widest text-white/90">
          404
        </h1>

        <div className="relative">
          <div className="absolute inset-0 blur-2xl opacity-30 bg-pink-500 rounded-full"></div>
        </div>

        <h2 className="mt-4 text-2xl font-semibold">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Go Home
          </Link>
          
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Error code: 404 | Lost in space 🚀
        </p>
      </div>
    </div>
    );
};

export default NotFound;