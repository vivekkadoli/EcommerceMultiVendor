import React from 'react';

const products = [
  {
    name: 'Turmeric Finger',
    description: 'Premium quality turmeric fingers, cleaned, dried, and polished for export.',
    image: '/TurmericFinger.png' // Replace with actual image if available
  },
  {
    name: 'Turmeric Powder',
    description: 'Export quality turmeric powder, available in BI, VI, and M1 grades.',
    image: '/TurmericPowder.png' // Replace with actual image if available
  },
  {
    name: 'Turmeric Bulb',
    description: 'High-grade turmeric bulbs, processed and packaged for international trade.',
    image: '/TurmericBulb.png' // Replace with actual image if available
  }
];

function Products() {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-list">
        {products.map((prod, idx) => (
          <div className="product-card" key={idx}>
            <img src={prod.image} alt={prod.name} className='product-image'/>
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
