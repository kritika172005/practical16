import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price
    };

    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
          Product Management
        </h1>

        <form onSubmit={addProduct} className="space-y-4">
          <div>
            <label className="mb-1 block font-semibold">
              Product Name
            </label>
            <input
              className="w-full rounded border p-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              Product Price
            </label>
            <input
              className="w-full rounded border p-2"
              type="number"
              min="1"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              required
            />
          </div>

          <button
            className="w-full rounded bg-blue-600 p-3 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            Add Product
          </button>
        </form>

        <h2 className="mt-8 mb-4 text-xl font-bold">Product List</h2>

        {products.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="mb-3 rounded border p-4"
            >
              <p><b>Name:</b> {product.name}</p>
              <p><b>Price:</b> ₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;