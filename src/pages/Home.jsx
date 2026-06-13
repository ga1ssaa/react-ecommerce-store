import { useState, useEffect } from 'react';
import { getProducts, getCategories } from '../services/api';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import CategoryFilter from '../components/CategoryFilter';
import SortSelect from '../components/SortSelect';
import Pagination from '../components/Pagination';

function Home(){

    const [products, setProducts] = useState([]);
    const { searchTerm } = useContext(SearchContext);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect( () => {

        async function fetchProducts(){
            const productsData = await getProducts();

            const categoriesData = await getCategories();

            setProducts(productsData);

            setCategories(categoriesData);

            setLoading(false);
        }
        
        fetchProducts();

    },[]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    const filteredProducts = products.filter(
        (product) => {
            const matchesSearch = 
                product.title.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = 
                selectedCategory === "all" || product.category === selectedCategory;
            
            return (
                matchesSearch && matchesCategory
            );
        });

    const productsPerPage = 12;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredProducts.length/productsPerPage);

    const sortedProducts = [...currentProducts];

    if(sortOption === "low-to-high"){
        sortedProducts.sort(
            (a,b) => a.price-b.price
        );
    }

    if(sortOption === "high-to-low"){
        sortedProducts.sort(
            (a,b) => b.price-a.price
        );
    }

    if(loading){
        return(
            <div className="grid grid-cols-1 gap-6 md:grid grid-cols-2 lg:grid grid-cols-4">

                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse rounded-xl border p-4"
                    >
                        <div className="h-48 bg-gray-300 rounded"></div>

                        <div className="mt-4 h-4 bg-gray-300 rounded"></div>

                        <div className="mt-2 h-4 w-[50%] bg-gray-300 rounded"></div>
                    </div>
                ))}
            </div>
        );
    }

    return(
        <section>
            <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-10 text-white">
                <h1 className="font-serif text-5xl font-bold">
                    Discover Amazing Products
                </h1>
                <p className="font-serif mt-4 text-lg">
                    Shop thousands of products at the best prices.
                </p>
            </div>

            <CategoryFilter 
                categories={categories}

                selectedCategory={selectedCategory}

                setSelectedCategory={setSelectedCategory}
            />

            <SortSelect 
                sortOption={sortOption}

                setSortOption={setSortOption}
            />

            <div className="mt-8">
                <h2 className="font-serif mb-6 text-3xl font-bold">
                    Products: {filteredProducts.length}
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {sortedProducts.map((product) => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage} />

            {filteredProducts.length === 0 ? (
                <div className="mt-12 text-center">
                    <h3 className="font-serif text-4xl font-bold">
                        No products found 😔
                    </h3>

                    <p className="font-serif mt-2 text-gray-500">
                        Try another search term or category.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
            </div>
        </section>
    );
}
export default Home;