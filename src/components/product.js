import React , {useEffect , useState} from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import  Skeleton  from "react-loading-skeleton";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "react-bootstrap";

const Product = () => {
    const {id} = useParams();
    const [product , setProduct] = useState([]);
    const [loading , setLoading] = useState(false);
    const user = useUserAuth()
    const [alert , setAlert] = useState(false);
    const dispatch = useDispatch();
    const AlertModal = () =>{
        return (
            <>
            <Alert className="col-md-3 col-lg-6 mx-auto text-center my-3" variant="danger">
                <h5>You have to log in first!</h5>
            </Alert>
            </>
        )
    }
    const addProduct = (product) =>{
         {!user.user ? setAlert(true):  dispatch(addItem(product)) }
    }
    useEffect(()=>{
        if(alert){
            const timer = setTimeout(()=>{
                setAlert(false)
            },3000)
        }
    },[alert])
    useEffect(()=>{
        const getProduct = async ()=>{
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
        }
        getProduct();
    },[])
    const Loading = ()=>{
        return(
            <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-6" style={{lineHeight : 2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>
            </div>
            </>
        )
    }
    const ShowProduct = ()=>{
        return (
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title}
                height="350px" width="350px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>  
                <h1 className="display-5">{product.title}</h1> 
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    ${product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=> addProduct(product)}>
                    Add to cart
                </button>
                <NavLink className="btn btn-dark ms-2 px-3" to ="/cart">
                    Go to cart
                </NavLink>
            </div>
            </>
        )
    }
    return (
        <div>
            {alert && <AlertModal/>}
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )

}
 export default Product;