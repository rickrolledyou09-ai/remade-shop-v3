export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h2>Welcome to ReMade</h2>
        <p>Hand-sewn one-of-a-kind tote bags made from upcycled fabric.</p>
        <p style={{ fontSize: '1rem', color: '#999', fontStyle: 'italic' }}>
          old fabric. new life
        </p>
        <div style={{ marginTop: '30px' }}>
          <a href="/shop" className="button">Browse Bags</a>
          <a href="/login" className="button" style={{ marginLeft: '10px' }}>Log In</a>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '30px' }}>Featured Bags</h2>
        <div className="bag-grid">
          <div className="bag-card">
            <h3>Forma</h3>
            <p className="bag-price">6.00 EUR</p>
            <p>The first official ReMade bag. Hand-sewn from deadstock fabric.</p>
            <button>View Details</button>
          </div>
          <div className="bag-card">
            <h3>Luma</h3>
            <p className="bag-price">5.00 EUR</p>
            <p>The second official ReMade bag. Bright and bold.</p>
            <button>View Details</button>
          </div>
          <div className="bag-card">
            <h3>Vintage Blue</h3>
            <p className="bag-price">7.00 EUR</p>
            <p>Soft indigo tote made from vintage denim scraps.</p>
            <button>View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
}
