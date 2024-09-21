import ProductCard from "./ProductCard"

function ProductsTable({data}){
    return (
            <table border="1px" style={{width:"50%"}}>
                <thead>
                    <tr>
                        <th style={{padding:"10px 5px",backgroundColor:"darkgreen",color:"white"}}>Sno</th>
                        <th style={{padding:"10px 5px",backgroundColor:"darkgreen",color:"white"}}>Brand</th>
                        <th style={{padding:"10px 5px",backgroundColor:"darkgreen",color:"white"}}>Category</th>
                        <th style={{padding:"10px 5px",backgroundColor:"darkgreen",color:"white"}}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {data.map((item) => (
                       <ProductCard key={item.id} id={item.id} brand={item.brand} category={item.category} price={item.price}/>
                    ))}
                </tbody>
            </table>
    )
}

export default ProductsTable