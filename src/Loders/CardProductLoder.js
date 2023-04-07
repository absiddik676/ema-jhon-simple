import { getShoppingCart } from "../utilities/fakedb"

const cardProductLoader = async() =>{
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json()
    const strored = getShoppingCart()
    const saveCart = []
    
        // step 1 get id
        for(const id in strored){
            // step 2 get data using id
            const saveProduct = products.find(p=> p.id == id)
            if(saveProduct){
                const quantity = strored[id];
                saveProduct.quantity = quantity
                saveCart.push(saveProduct)
            }
        }
        return saveCart
}
export default cardProductLoader;