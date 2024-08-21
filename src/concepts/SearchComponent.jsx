const products=[
    {
      productname:"lux",
      price:3403
    },
    {
      productname:"dettole",
      price:34033
    },
    {
      productname:"lifeboy",
      price:340
    },
    {
      productname:"santur",
      price:33
    }, 
    {
      productname:"johnson",
      price:334
    }
  ]
  
  const SearchComponent=()=>{
    const [searchTerm, setSearchTerm]=useState("");
    const [searchproduct,setSearchedProduct]=useState();
  
    const handlechange=(e)=>{
      setSearchTerm(e.target.value);
    }
    const handleSearch=(e)=>{
      e.preventDefault();
      setSearchedProduct(products?.find((ele)=>ele.productname===searchTerm)); 
    }
    return (
      <>
      <input type="text" onChange={handlechange}/>
      <button onClick={handleSearch}>search</button>
      <div>{searchproduct ? 
        <div>
          <p>productname : {searchproduct?.productname}</p>
          <p>product price : {searchproduct?.price}</p>
        </div> 
      : <p>no product found</p>}</div>
      </>
    )
  }
  export default SearchComponent