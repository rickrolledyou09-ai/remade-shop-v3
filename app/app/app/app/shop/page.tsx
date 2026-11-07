export default function ShopPage() {
  const bags = [
    { id: 1, name: 'Forma', price: 6.0, color: 'black', description: 'Hand-sewn from deadstock fabric with clean lines.' },
    { id: 2, name: 'Luma', price: 5.0, color: 'red', description: 'Bright and bold with eco-friendly vibes.' },
    { id: 3, name: 'Vintage Blue', price: 7.0, color: 'blue', description: 'Soft indigo tote bag made from vintage denim scraps.' },
    { id: 4, name: 'Minimalist Natural', price: 8.0, color: 'beige', description: 'Clean, simple design in natural beige.' },
    { id: 5, name: 'Patchwork Mix', price: 9.0, color: 'multi', description: 'One-of-a-kind patchwork tote.' },
  ];

  return (
    <div className="container">
      <h1 style={{ marginBottom: '30px' }}>Shop All Bags</h1>
      
      <div className="bag-grid">
        {bags.map((bag) => (
          <div key={bag.id} className="bag-card">
            <h3>{bag.name}</h3>
            <p className="bag-price">{bag.price.toFixed(2)} EUR</p>
            <p style={{ fontSize: '0.85rem', color: '#999' }}>
              Color: {bag.color}
            </p>
            <p>{bag.description}</p>
            <button style={{ marginTop: '15px', width: '100%' }}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
