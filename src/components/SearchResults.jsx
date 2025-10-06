import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard";

export const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q")?.toLowerCase() || "";

  useEffect(() => {
    const getResults = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts();

        const filtered = products.filter((p) => {
          const searchString = `
            ${p.name || ""}
            ${p.description || ""}
            ${p.company || ""}
            ${p.category || ""}
            ${p.tags?.join(" ") || ""}
          `.toLowerCase();

          return searchString.includes(searchTerm);
        });

        setResults(filtered);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [searchTerm]);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500">Loading results...</div>
    );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">
        Search results for “{searchTerm}”
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
