import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import WomenCard from "../Components/WomenWatches/WomenCard";
import Women01 from "../assets/WomenWatchesImages/Women-01.webp";
import Women02 from "../assets/WomenWatchesImages/Women-02.webp";
import Women03 from "../assets/WomenWatchesImages/Women-03.webp";
import Women04 from "../assets/WomenWatchesImages/Women-04.webp";
import Women05 from "../assets/WomenWatchesImages/Women-05.webp";
import Women06 from "../assets/WomenWatchesImages/Women-06.webp";
import Women07 from "../assets/WomenWatchesImages/Women-07.webp";
import Women08 from "../assets/WomenWatchesImages/Women-08.webp";
import Women09 from "../assets/WomenWatchesImages/Women-09.webp";
import Women10 from "../assets/WomenWatchesImages/Women-10.webp";
import Women11 from "../assets/WomenWatchesImages/Women-11.webp";
import Women12 from "../assets/WomenWatchesImages/Women-12.webp";
import Footer from "../Components/Footer/Footer";

const defaultWomenProducts = [
  {
    id: 1,
    Image: Women01,
    Name: "Lilly",
    Description: "Lilly Watch – Women's Stainless Steel",
    Stock: 10,
    Price: "Rs. 9,999",
  },
  {
    id: 2,
    Image: Women02,
    Name: "Omega",
    Description: "Omega Watch – Women's Stainless Steel",
    Stock: 10,
    Price: "Rs. 9,999",
  },
  {
    id: 3,
    Image: Women03,
    Name: "Tale 1.0",
    Description: "Tale 1.0 Watch – Women's Bracelet",
    Stock: 10,
    Price: "Rs. 14,999",
  },
  {
    id: 4,
    Image: Women04,
    Name: "Felecity",
    Description: "Felecity Watch – Women's Bracelet",
    Stock: 10,
    Price: "Rs. 9,999",
  },
  {
    id: 5,
    Image: Women05,
    Name: "Amore",
    Description: "Amore Watch – Women's Stainless Steel",
    Stock: 10,
    Price: "Rs. 9,999",
  },
  {
    id: 6,
    Image: Women06,
    Name: "Ruby",
    Description: "Ruby Watch – Women's Bracelet",
    Stock: 10,
    Price: "Rs. 9,999",
  },
  {
    id: 7,
    Image: Women07,
    Name: "Valentina Smartwatch",
    Description: "Valentina Smartwatch – Sleek Design | Round Dial",
    Stock: 10,
    Price: "Rs. 5,949",
  },
  {
    id: 8,
    Image: Women08,
    Name: "Aristos",
    Description: "Aristos Watch – Women's Stainless Steel",
    Stock: 10,
    Price: "Rs. 11,599",
  },
  {
    id: 9,
    Image: Women09,
    Name: "Duchess",
    Description: "Duchess Watch – Women's Stainless Steel",
    Stock: 10,
    Price: "Rs. 13,999",
  },
  {
    id: 10,
    Image: Women10,
    Name: "Royce",
    Description: "Royce Watch – Women's Stainless Steel",
    Stock: 10,
    Price: "Rs. 10,999",
  },
  {
    id: 11,
    Image: Women11,
    Name: "Ace Smartwatch",
    Description: "Ace Smartwatch – Long Lasting Battery | Always On Display",
    Stock: 10,
    Price: "Rs. 8,399",
  },
  {
    id: 12,
    Image: Women12,
    Name: "Glam",
    Description: "Glam Watch – Women's Stainless Steel",
    Stock: 10,
    Price: "Rs. 9,999",
  },
];

export default function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("womenProducts");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      localStorage.setItem(
        "womenProducts",
        JSON.stringify(defaultWomenProducts)
      );
      setProducts(defaultWomenProducts);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Women’s Watches</h1>
      <div className="cards-container">
        {products.map((item) => (
          <WomenCard
            key={item.id}
            Image={item.Image}
            Name={item.Name}
            Description={item.Description}
            Stock={item.Stock}
            Price={item.Price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
