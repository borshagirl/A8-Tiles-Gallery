import { Spinner } from "@heroui/react";


const loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      <div className="flex flex-col items-center gap-4">
        
        <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Success</span>
        </div>

        <p className="text-white/80 text-sm tracking-wide animate-pulse">
          Loading, please wait...
        </p>
      </div>

    </div>
    );
};

export default loading;