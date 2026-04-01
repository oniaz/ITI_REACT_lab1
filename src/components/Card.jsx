export default function Card({ title, price, image, children }) {
    return (
        <div className="bg-white text-gray-800 m-4 rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300">
            
            <img 
                src={image} 
                alt={title} 
                  className="w-full h-40 object-contain bg-gray-100"

            />

            <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                <p className="text-sky-600 font-bold mb-3">{price}</p>

                {children}
            </div>
        </div>
    );
}