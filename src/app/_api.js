let products = [
    {
        id : 1, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 2, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 3, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 4, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 5, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 6, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 7, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 8, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    } ,
    {
        id : 9, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    },
    {
        id : 10, name:"Product1", price: 200, quantity : 1, SKU: 5, category : "Pants",Brand:"Middle class"
    }
]

export default function handler(req,res){
    switch(req.method){
        case 'GET':
            //Returns lists of products
            res.status(200).json(products);
            break;
        case 'POST':
            // Creates new Product
            const newProduct = {id: products.length + 1 , ...req.body} ;
            products.push(newProduct) ;
            res.status(201).json(newProduct);
            break ;
        case 'PUT':
            // Update an Existing Product
            const { id , name , price } = req.body ;
            const productIndex = products.findIndex((p) => p.id == id) ;
            if(productIndex =! -1 ){
                products[productIndex] = { id, name , price } ;
                res.status(200).json(products[productIndex]) ;
            }
            else{
                res.status(404).json({message:"Product not found !"}) ;
            }
            break ;
            case "DELETE":
                // Delete a product
                const { id : deleteId } = req.body ;
                products = products.filter((p) => p.id =! deleteId ) ;
                res.status(204).end() ;
                break ;
            default:
                res.setHeader('Allow', ['GET', 'POST','PUT','DELETE']) ;
                res.status(405).end(`Method ${req.method} Not Allowed!!`) ;
     }
}