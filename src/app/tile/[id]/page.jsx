import Image from "next/image";
import Link from "next/link";


const TileDetailsPage = async ({params}) => {
    const {id} = await params
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const tile = await res.json()


    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5 sm:px-4 lg:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 relative h-100 lg:h-150 bg-gray-200">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover"
                priority
              />  
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">
              {tile.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {tile.title}
            </h1>

            <p className="text-gray-500 text-lg mb-2">
              Material: <span className="text-gray-900 font-medium">{tile.material}</span>
            </p>

            <div className="mb-2">
              <p className="text-gray-600">
                {tile.description}
              </p>
            </div>

            <div className="flex items-center justify-between mb-3 bg-gray-50 rounded-xl">
              <div className="py-2">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold text-gray-900">${tile.price}</p>
              </div>
              <p className={`font-bold ${tile.inStock ? "text-green-600" : "text-red-600"}`}>{tile.inStock === true ? "In Stock" : "Out of Stock"}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-tighter">Tags</h3>
              <div className="flex flex-wrap gap-2">
                
                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">
                  {tile.material}
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">
                  {tile.dimensions}
                </span>
              </div>
            </div>

            <button className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
              Add to Project / Inquiry
            </button>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default TileDetailsPage;