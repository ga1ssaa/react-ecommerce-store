function SortSelect({sortOption, setSortOption}){
    return(
        <div className="mt-6">

            <select
                value={sortOption}
                onChange={(e) => 
                    setSortOption(e.target.value)
                }
                className="font-serif rounded-lg border px-4 py-2 text-center"
            >
                <option value="default">
                    Default
                </option>
                
                <option value="high-to-low">
                    Price: High to Low
                </option>

                <option value="low-to-high">
                    Price: Low to High
                </option>

            </select>
        </div>
    );
};
export default SortSelect;