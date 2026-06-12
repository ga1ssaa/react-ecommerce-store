const BASE_URL = "https://dummyjson.com";

export async function getProducts(){
    const response = await fetch(
        `${BASE_URL}/products?limit=194`
    );

    const data = await response.json();
    return data.products;
}

export async function getProduct(id){
    const response = await fetch(
        `${BASE_URL}/products/${id}`
    );
    return await response.json();
}

export async function getCategories(){
    const response = await fetch(
        `${BASE_URL}/products/category-list`
    );
    return await response.json();
}

