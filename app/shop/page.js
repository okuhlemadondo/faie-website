'use client';
import PageHeader from '@/components/ui/PageHeader';
import ProductCard from '@/components/ProductCard/ProductCard';
import { getAllCategories, getProductsByCategory } from '@/lib/data';
import { useState, useMemo } from 'react';
import styles from './page.module.css';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  
  const categories = getAllCategories();
  
  // Base category products
  const categoryProducts = getProductsByCategory(activeCategory);

  // Apply filters and sort
  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    // 1. Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }

    // 2. Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.numericPrice - b.numericPrice);
        break;
      case 'price-high':
        result.sort((a, b) => b.numericPrice - a.numericPrice);
        break;
      case 'name-az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'recommended':
      default:
        // Keep original order
        break;
    }

    return result;
  }, [categoryProducts, searchQuery, sortBy]);

  return (
    <>
      <PageHeader 
        title="THE COLLECTION" 
        subtitle="CURATED LUXURY PIECES"
        imagePath="/images/stock/luxury-interior.jpg"
      />

      <section className={styles.shopSection}>
        <div className={styles.container}>
          
          <div className={styles.controlsToolbar}>
            <div className={styles.searchBox}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search products..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className={styles.sortBox}>
              <span className={`${styles.sortLabel} tracked-text`}>SORT BY:</span>
              <select 
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-az">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className={styles.filterNav}>
            {categories.map((category) => (
              <button 
                key={category}
                className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''} tracked-text`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.noResults}>
              <p>No products found matching your criteria.</p>
              <button 
                className={styles.resetBtn}
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setSortBy('recommended');
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
             <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
