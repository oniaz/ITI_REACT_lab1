export default function Card({ title, price, image, children}) {
    return (
        <div className="bg-sky-100 text-sky-950 m-3 p-4 rounded-lg font-semibold">
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <img src={image} alt={title} />
            {children}
        </div>
    );
}