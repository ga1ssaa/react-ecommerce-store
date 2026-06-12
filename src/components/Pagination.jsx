function Pagination({ currentPage, totalPages, setCurrentPage }) {

    const pages = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {

        if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, "...", totalPages);
        }

        else if (currentPage >= totalPages - 2) {
            pages.push(
                1,
                "...",
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages
            );
        }

        else {
            pages.push(
                1,
                "...",
                currentPage - 1,
                currentPage,
                currentPage + 1,
                "...",
                totalPages
            );
        }
    }

    return (
        <div className="flex justify-center flex-wrap">
            {pages.map((page, index) => (

                page === "..." ? (

                    <span
                        key={index}
                        className="mx-2 mt-6 px-2 py-2"
                    >
                        ...
                    </span>

                ) : (

                    <button
                        key={`${page}-${index}`}
                        onClick={() => setCurrentPage(page)}
                        className={`rounded-lg border mt-6 mx-2 px-4 py-2 cursor-pointer tranition hover:scale-102
                            ${
                                currentPage === page
                                    ? "bg-green-500 text-white"
                                    : ""
                            }`}
                    >
                        {page}
                    </button>

                )
            ))}
        </div>
    );
}

export default Pagination;