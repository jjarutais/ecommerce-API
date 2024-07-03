import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";
import ProductService from "@/service/ProductService";
import { ProductCard } from "@/components/ProductCard";
import Footer from "@/components/Footer";


export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const { data } = await ProductService.findAll();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <NavBar />
      <main className="container">
        <div className="row div_product_card">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
        </div>
      </main>
      <Footer />
    </>
  );
}