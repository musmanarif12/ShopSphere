// import React, { useState } from "react";
// import "./BuyNow.css";

// export default function BuyNow({ total, onConfirm }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !paymentMethod) {
//       alert("Please fill all fields and select payment method!");
//       return;
//     }
//     onConfirm();
//   };

//   return (
//     <form className="buy-form" onSubmit={handleSubmit}>
//       <h2 className="buy-title">Buy Now</h2>

//       <input
//         type="text"
//         placeholder="Enter Your Name"
//         className="buy-input"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Enter Your Email"
//         className="buy-input"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label className="buy-label">Select Payment Method:</label>
//       <select
//         className="buy-select"
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//       >
//         <option value="">-- Select Method --</option>
//         <option>Bank Transfer</option>
//         <option>JazzCash</option>
//         <option>EasyPaisa</option>
//         <option>Cash on Delivery</option>
//       </select>

//       <h3>Total: Rs. {total}</h3>

//       <button type="submit" className="buy-btn" style={{ backgroundColor: "#95c6e5" }}>
//         Confirm Order
//       </button>
//     </form>
//   );
// }

// This code has Stripe payment method implemented in it.” ✅

// import React, { useState } from "react";
// import "./BuyNow.css";

// export default function BuyNow({ total, onConfirm }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleStripePayment = () => {

//     const stripePaymentLink =
//       "https://buy.stripe.com/test_5kQeVdfZq9Oob2y7M0dwc01";

//     window.location.href = stripePaymentLink;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email) {
//       alert("Please fill your name and email!");
//       return;
//     }
//     // Stripe payment initiate
//     handleStripePayment();
//   };

//   return (
//     <form className="buy-form" onSubmit={handleSubmit}>
//       <h2 className="buy-title">Buy Now</h2>

//       <input
//         type="text"
//         placeholder="Enter Your Name"
//         className="buy-input"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Enter Your Email"
//         className="buy-input"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <h3>Total: Rs. {total}</h3>

//       <button
//         type="submit"
//         className="buy-btn"
//         style={{ backgroundColor: "#6772e5", color: "white" }}
//       >
//         Pay with Stripe
//       </button>
//     </form>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./BuyNow.css";

export default function BuyNowWithLocation({ total }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [mapUrl, setMapUrl] = useState("");
  const debounceRef = useRef(null);

  // Nominatim autocomplete
  useEffect(() => {
    if (!cityQuery || cityQuery.length < 2) {
      setCitySuggestions([]);
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=10&q=${encodeURIComponent(
        cityQuery
      )}`;
      const res = await fetch(url, { headers: { "Accept-Language": "en" } });
      const data = await res.json();
      setCitySuggestions(data || []);
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [cityQuery]);

  const handleCitySelect = (item) => {
    setSelectedCity(item);
    setCityQuery(item.display_name);
    setCitySuggestions([]);

    const lat = parseFloat(item.lat);
    const lon = parseFloat(item.lon);
    const delta = 0.03;
    const left = lon - delta;
    const right = lon + delta;
    const top = lat + delta;
    const bottom = lat - delta;

    const embed = `https://www.openstreetmap.org/export/embed.html?bbox=${left},${bottom},${right},${top}&layer=mapnik&marker=${lat},${lon}`;
    setMapUrl(embed);
  };

  const handleCityKeyDown = (e) => {
    if (e.key === "Enter" && citySuggestions.length > 0) {
      handleCitySelect(citySuggestions[0]);
    }
  };

  const handleStripePayment = () => {
    const stripePaymentLink =
      "https://buy.stripe.com/test_5kQeVdfZq9Oob2y7M0dwc01";
    window.location.href = stripePaymentLink;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill your name and email!");
      return;
    }
    if (!selectedCity) {
      alert("Please select your city/area!");
      return;
    }
    handleStripePayment();
  };

  return (
    <div className="buy-form-container">
      <form className="buy-form" onSubmit={handleSubmit}>
        <h2 className="buy-title">Buy Now</h2>

        <input
          type="text"
          placeholder="Enter Your Name"
          className="buy-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="buy-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Your City"
          className="buy-input"
          value={cityQuery}
          onChange={(e) => {
            setCityQuery(e.target.value);
            setSelectedCity(null);
          }}
          onKeyDown={handleCityKeyDown}
        />

        {citySuggestions.length > 0 && (
          <ul className="areas-dropdown">
            {citySuggestions.map((s) => (
              <li key={s.place_id} onClick={() => handleCitySelect(s)}>
                {s.display_name}
              </li>
            ))}
          </ul>
        )}

        {mapUrl && (
          <div className="map-frame">
            <iframe title="city-map" src={mapUrl}></iframe>
            <button
              type="button"
              className="close-btn"
              onClick={() => setMapUrl("")}
            >
              Close Map
            </button>
          </div>
        )}

        <h3>Total: Rs. {total}</h3>

        <button
          type="submit"
          className="buy-btn"
          style={{ backgroundColor: "#6772e5", color: "white" }}
        >
          Pay with Stripe
        </button>
      </form>
    </div>
  );
}
