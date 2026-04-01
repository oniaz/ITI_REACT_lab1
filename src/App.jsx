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
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold">ReactJS: Lab 1</h1>

      {products.map((item, index) => {
        return <Card key={index}
          title={item.title}
          price={item.price}
          image={item.image}
        >
          <Button />
        </Card >;
      })}
    </>
  )
}

export default App
