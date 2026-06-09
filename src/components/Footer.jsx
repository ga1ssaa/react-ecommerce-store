function Footer(){
    return(
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto px-4 py-6"> 
                <div className="flex flex-col items-center justify-between gap-3 md:flew-row">
                    <h2 className="font-semibold">
                        ShopHub
                    </h2>
                    <p className="text-sm text-gray-500">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer