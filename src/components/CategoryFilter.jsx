function CategoryFilter({categories, selectedCategory, setSelectedCategory}){
    return(
        <div className="font-serif mt-8 flex flex-wrap gap-3">

                <button
                    onClick={ () => setSelectedCategory("all")}
                    className={`rounded-lg px-4 py-2 cursor-pointer transition
                    ${
                        selectedCategory === "all" ? "bg-green-500 text-white" : "border border-green-500"
                    }`}
                >
                    All 
                </button>
                
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick = {() => setSelectedCategory(category)}
                        className = {`rounded-lg px-4 py-2 cursor-pointer transition
                        ${
                            selectedCategory === category ? "bg-green-500 text-white" : "border border-green-500"
                        }`}
                    >
                        {category}
                    </button>
                ))}

        </div>
    );
}
export default CategoryFilter