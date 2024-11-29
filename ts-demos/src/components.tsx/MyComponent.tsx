import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category:string;
  thumbnail: string;
  images: string[];
}

const MyComponent = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/product/1')
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };

    fetchData();

  }, []);

  return <div>
    {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Discount: {data.discountPercentage}%</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
          <p>Brand: {data.brand}</p>
          <p>Category: {data.category}</p>
          <img src={data.thumbnail} alt={data.title} />
          <ul>
            {data.images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Product ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
    ) :(<p>Loading...</p>)}
  </div>;
};
export default MyComponent;
