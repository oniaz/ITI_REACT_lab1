import Card from "./components/Card"
import Button from "./components/Button"

function App() {

  const products = [
    {
      title: "Vase 1",
      price: "$100",
      image: "src/assets/images/1.jpg"
    },
    {
      title: "Vase 2",
      price: "$200",
      image: "src/assets/images/2.jpg"
    },
    {
      title: "Vase 3",
      price: "$300",
      image: "src/assets/images/3.jpg"
    },
    {
      title: "Vase 4",
      price: "$150",
      image: "src/assets/images/4.jpg"
    },
    {
      title: "Vase 5",
      price: "$250",
      image: "src/assets/images/5.jpg"
    },
    {
      title: "Vase 6",
      price: "$350",
      image: "src/assets/images/6.jpg"
    }
  ];

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">ReactJS: Lab 1</h1>
        <h2 className="text-lg text-gray-600 mt-1">Omnia Mohamed</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <Card key={index} title={item.title} price={item.price} image={item.image}>
            <Button itemNumber={index + 1} />
          </Card>
        ))}
      </div>
    </>
  )
}

export default App
