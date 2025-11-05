// Imports & Initial States
import React, { useState, useEffect } from "react";

export default function Inventory() {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [smartProducts, setSmartProducts] = useState([]);

  const [category, setCategory] = useState("men");
  const [newProduct, setNewProduct] = useState({
    Image: "",
    Name: "",
    Price: "",
    Stock: 0,
  });
  // useEffect (Load data from localStorage)
  useEffect(() => {
    const menData = localStorage.getItem("menProducts");
    const womenData = localStorage.getItem("womenProducts");
    const smartData = localStorage.getItem("SmartProducts");

    if (menData) setMenProducts(JSON.parse(menData));
    if (womenData) setWomenProducts(JSON.parse(womenData));
    if (smartData) setSmartProducts(JSON.parse(smartData));
  }, []);
  //  Update Product Function

  const updateProduct = (
    products,
    setProducts,
    id,
    field,
    value,
    storageKey
  ) => {
    const updated = products.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setProducts(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };
  // Delete Product Function
  const deleteProduct = (products, setProducts, id, storageKey) => {
    const updated = products.filter((item) => item.id !== id);
    setProducts(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };
  // Add Product Function
  const addProduct = () => {
    if (!newProduct.Image || !newProduct.Name || !newProduct.Price) {
      alert("Please fill Image URL, Name, and Price!");
      return;
    }

    let targetProducts, setTargetProducts, storageKey;

    if (category === "men") {
      targetProducts = menProducts;
      setTargetProducts = setMenProducts;
      storageKey = "menProducts";
    } else if (category === "women") {
      targetProducts = womenProducts;
      setTargetProducts = setWomenProducts;
      storageKey = "womenProducts";
    } else {
      targetProducts = smartProducts;
      setTargetProducts = setSmartProducts;
      storageKey = "SmartProducts";
    }

    const newId =
      targetProducts.length > 0
        ? targetProducts[targetProducts.length - 1].id + 1
        : 1;
    const productToAdd = { id: newId, ...newProduct };
    const updated = [...targetProducts, productToAdd];
    setTargetProducts(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));

    setNewProduct({ Image: "", Name: "", Price: "", Stock: 0 });
  };
  // Render Table Function
  const renderTable = (products, setProducts, storageKey) => (
    <table
      border="1"
      cellPadding="10"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "white",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#e3e3e3" }}>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Edit Name</th>
          <th>Edit Price</th>
          <th>Edit Stock</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>
              {item.Image ? (
                <img
                  src={item.Image}
                  alt={item.Name}
                  width="70"
                  height="70"
                  style={{ borderRadius: "10px" }}
                />
              ) : (
                "No Image"
              )}
            </td>
            <td>{item.Name}</td>
            <td>{item.Price}</td>
            <td>{item.Stock}</td>
            <td>
              <input
                type="text"
                value={item.Name}
                onChange={(e) =>
                  updateProduct(
                    products,
                    setProducts,
                    item.id,
                    "Name",
                    e.target.value,
                    storageKey
                  )
                }
                style={{ width: "100px", padding: "5px" }}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.Price}
                onChange={(e) =>
                  updateProduct(
                    products,
                    setProducts,
                    item.id,
                    "Price",
                    e.target.value,
                    storageKey
                  )
                }
                style={{ width: "100px", padding: "5px" }}
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                value={item.Stock}
                onChange={(e) =>
                  updateProduct(
                    products,
                    setProducts,
                    item.id,
                    "Stock",
                    Number(e.target.value),
                    storageKey
                  )
                }
                style={{ width: "70px", padding: "5px", textAlign: "center" }}
              />
            </td>
            <td>
              <button
                onClick={() =>
                  deleteProduct(products, setProducts, item.id, storageKey)
                }
                style={{
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  // Return JSX (Form + Tables)
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Add New Product</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "5px" }}
        >
          <option value="men">Men's Watches</option>
          <option value="women">Women's Watches</option>
          <option value="smart">SmartWatches</option>
        </select>

        <input
          type="text"
          placeholder="Enter Image URL"
          value={newProduct.Image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, Image: e.target.value })
          }
          style={{ padding: "5px", width: "250px" }}
        />
        <input
          type="text"
          placeholder="Name"
          value={newProduct.Name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, Name: e.target.value })
          }
          style={{ padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.Price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, Price: e.target.value })
          }
          style={{ padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.Stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, Stock: Number(e.target.value) })
          }
          style={{ padding: "5px", width: "80px" }}
        />
        <button
          onClick={addProduct}
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Product
        </button>
      </div>

      <h1 style={{ textAlign: "center" }}>Manage Men’s Watches</h1>
      {menProducts.length > 0 ? (
        renderTable(menProducts, setMenProducts, "menProducts")
      ) : (
        <p style={{ textAlign: "center" }}>No Men’s products found.</p>
      )}

      <hr style={{ margin: "40px 0", borderTop: "2px solid #ccc" }} />

      <h1 style={{ textAlign: "center" }}>Manage Women’s Watches</h1>
      {womenProducts.length > 0 ? (
        renderTable(womenProducts, setWomenProducts, "womenProducts")
      ) : (
        <p style={{ textAlign: "center" }}>No Women’s products found.</p>
      )}

      <hr style={{ margin: "40px 0", borderTop: "2px solid #ccc" }} />

      <h1 style={{ textAlign: "center" }}>Manage SmartWatches</h1>
      {smartProducts.length > 0 ? (
        renderTable(smartProducts, setSmartProducts, "SmartProducts")
      ) : (
        <p style={{ textAlign: "center" }}>No SmartWatches found.</p>
      )}
    </div>
  );
}

/*

State: Men/Women/Smart products + newProduct + category

useEffect: LocalStorage se initial data load

Functions:

addProduct() → add new
updateProduct() → edit field
deleteProduct() → remove
renderTable(): Reusable table function
JSX return: Form + Tables + conditional messages

*/
