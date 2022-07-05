import React ,{useState , useEffect} from 'react';
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';

export default function Search() {
    const {searchTerm} = useParams();
    const[data , setData] = useState([]);
    const[loading , setLoading ] = useState(false);
    const[searchResult, setSearchResult] = useState([]);
    let componentMounted = true;

    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true);
            const respone = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.clone().json())
            .then((res) =>{
                if(componentMounted){
                    setData(res);
                    setLoading(false);
                    setSearchResult(res.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())))
                }
            })
            .catch(error => console.log(error));
            return ()=> {
                componentMounted = false;
            }
        }
        getProducts();
    } ,[searchTerm]);
  return (
    <div className="container my-5 py-5">
        <div className='row'>
        { !loading && searchResult.length === 0 ?
        <div>
            <h4>product not found!</h4>
        </div>
        :
        (searchResult.map((product)=>{
            return(
                <>
                    <div className="col-md-3 mb-4"  key={product.id}>
                    <div className="card h-100 text-center p-4">
                        <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                            <p className="card-text lead fw-bolde">${product.price}</p>
                            <NavLink className="btn btn-outline-dark" to={`/products/${product.id}`}>buy now</NavLink>
                        </div>
                        </div>
                    </div>
                    
                </>
            )
    })) }
    </div>
    </div>
  )
}
