import Card from "./components/Card"
import Button from "./components/Button"

function App() {

  const products = [
    {
      title: "Card 1",
      price: "$100",
      image: "https://source.unsplash.com/random/300x200?sig=1"
    },
    {
      title: "Card 2",
      price: "$200",
      image: "https://source.unsplash.com/random/300x200?sig=2"
    },
    {
      title: "Card 3",
      price: "$300",
      image: "https://source.unsplash.com/random/300x200?sig=3"
    },
    {
      title: "Card 4",
      price: "$150",
      image: "https://source.unsplash.com/random/300x200?sig=4"
    },
    {
      title: "Card 5",
      price: "$250",
      image: "https://source.unsplash.com/random/300x200?sig=5"
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
