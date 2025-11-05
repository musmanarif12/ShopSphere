import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import MenCard from "../Components/MenWatch/MenCard";
import Men01 from "../assets/MenWatchesImages/Men-01.webp";
import Men02 from "../assets/MenWatchesImages/Men-02.webp";
import Men03 from "../assets/MenWatchesImages/Men-03.webp";
import Men04 from "../assets/MenWatchesImages/Men-04.webp";
import Men05 from "../assets/MenWatchesImages/Men-05.webp";
import Men06 from "../assets/MenWatchesImages/Men-06.webp";
import Men07 from "../assets/MenWatchesImages/Men-07.webp";
import Men08 from "../assets/MenWatchesImages/Men-08.webp";
import Men09 from "../assets/MenWatchesImages/Men-09.webp";
import Men10 from "../assets/MenWatchesImages/Men-10.webp";
import Men11 from "../assets/MenWatchesImages/Men-11.webp";
import Men12 from "../assets/MenWatchesImages/Men-12.webp";
import Footer from "../Components/Footer/Footer";

const defaultMenProducts = [
  {
    id: 1,
    Image: Men01,
    Name: "Inspiro",
    Description: "Inspiro Watch – Men's Leather",
    Stock: 10,
    Price: "Rs. 7,499",
  },
  {
    id: 2,
    Image: Men02,
    Name: "Modicci",
    Description: "Modicci Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 11,499",
  },
  {
    id: 3,
    Image: Men03,
    Name: "Lucky",
    Description: "Lucky Watch – Men's Leather",
    Stock: 10,
    Price: "Rs. 8,499",
  },
  {
    id: 4,
    Image: Men04,
    Name: "Amore",
    Description: "Amore Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 9,999",
  },
  {
    id: 5,
    Image: Men05,
    Name: "Aspire",
    Description: "Aspire Watch – Men's Leather",
    Stock: 10,
    Price: "Rs. 7,499",
  },
  {
    id: 6,
    Image: Men06,
    Name: "Lotus 2.0",
    Description: "Lotus 2.0 Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 9,899",
  },
  {
    id: 7,
    Image: Men07,
    Name: "Onyx",
    Description: "Onyx Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 11,499",
  },
  {
    id: 8,
    Image: Men08,
    Name: "Royce",
    Description: "Royce Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 11,999",
  },
  {
    id: 9,
    Image: Men09,
    Name: "Duchess",
    Description: "Duchess Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 13,999",
  },
  {
    id: 10,
    Image: Men10,
    Name: "Washington",
    Description: "Washington Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 10,999",
  },
  {
    id: 11,
    Image: Men11,
    Name: "Wyndow",
    Description: "Wyndow Watch – Men's Stainless Steel",
    Stock: 10,
    Price: "Rs. 14,999",
  },
  {
    id: 12,
    Image: Men12,
    Name: "Elite",
    Description: "Elite Watch – Men's Leather",
    Stock: 10,
    Price: "Rs. 8,499",
  },
];

export default function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("menProducts");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      localStorage.setItem("menProducts", JSON.stringify(defaultMenProducts));
      setProducts(defaultMenProducts);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Men’s Watches</h1>
      <div className="cards-container">
        {products.map((item) => (
          <MenCard
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
