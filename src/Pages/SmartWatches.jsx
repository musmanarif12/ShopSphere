import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import SmartCard from "../Components/SmartWatch/SmartCard";
import Smart01 from "../assets/SmartWatchImages/Smart-01.webp";
import Smart02 from "../assets/SmartWatchImages/Smart-02.webp";
import Smart03 from "../assets/SmartWatchImages/Smart-03.webp";
import Smart04 from "../assets/SmartWatchImages/Smart-04.webp";
import Smart05 from "../assets/SmartWatchImages/Smart-05.webp";
import Smart06 from "../assets/SmartWatchImages/Smart-06.webp";
import Smart07 from "../assets/SmartWatchImages/Smart-07.webp";
import Smart08 from "../assets/SmartWatchImages/Smart-08.png";
import Smart09 from "../assets/SmartWatchImages/Smart-09.png";
import Smart10 from "../assets/SmartWatchImages/Smart-10.webp";
import Footer from "../Components/Footer/Footer";

const defaultSmartProducts = [
  {
    id: 1,
    Image: Smart01,
    Name: "Maxfit Smartwatch",
    Description: "Water Resistant | Square Dial",
    Stock: 10,
    Price: "Rs. 5,599",
  },
  {
    id: 2,
    Image: Smart02,
    Name: "Primo Smartwatch",
    Description: "AI Voice Assistance | Always On Display",
    Stock: 10,
    Price: "Rs. 7,699",
  },
  {
    id: 3,
    Image: Smart03,
    Name: "Horizonx Smartwatch",
    Description: "1.38 IPS Display | Round Dial",
    Stock: 10,
    Price: "Rs. 5,599",
  },
  {
    id: 4,
    Image: Smart04,
    Name: "Torque Chain Smartwatch",
    Description: "AMOLED | Stainless Steel",
    Stock: 10,
    Price: "Rs. 12,599",
  },
  {
    id: 5,
    Image: Smart05,
    Name: "Valentina Smartwatch",
    Description: "Sleek Design | Round Dial",
    Stock: 10,
    Price: "Rs. 5,949",
  },
  {
    id: 6,
    Image: Smart06,
    Name: "ForcePro Smartwatch",
    Description: "Health Monitoring | Sleek Design",
    Stock: 10,
    Price: "Rs. 9,799",
  },
  {
    id: 7,
    Image: Smart07,
    Name: "Prestige Smartwatch",
    Description: "AMOLED | 3D Curved Screen",
    Stock: 10,
    Price: "Rs. 12,592",
  },
  {
    id: 8,
    Image: Smart08,
    Name: "ForcePro Chain Smartwatch",
    Description: "AMOLED | Chain Design",
    Stock: 10,
    Price: "Rs. 11,899",
  },
  {
    id: 9,
    Image: Smart09,
    Name: "Ace Smartwatch",
    Description: "Long Battery | Always On Display",
    Stock: 10,
    Price: "Rs. 8,399",
  },
  {
    id: 10,
    Image: Smart10,
    Name: "Prestige Chain Smartwatch",
    Description: "AMOLED | Stainless Steel",
    Stock: 10,
    Price: "Rs. 13,999",
  },
];

export default function SmartWatches() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("SmartProducts");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      localStorage.setItem("SmartProducts", JSON.stringify(defaultSmartProducts));
      setProducts(defaultSmartProducts);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Smart Watches</h1>
      <div className="cards-container">
        {products.map((item) => (
          <SmartCard
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
