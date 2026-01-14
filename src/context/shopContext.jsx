import { createContext,useState ,useEffect} from "react";
import { product } from "../assets/Assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const shopContext = createContext();

const ShopContextProvider = (props) => {
    const currenecy = 'Rs.';
    const delhivery_fee = 50;
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    const [sreach, setsreach] = useState('');
    const [showsreach, setshowsreach] = useState(false);
    const [card_item, setcard_item] = useState({})
    // const [product, setproduct] = useState([])
    const navigate =  useNavigate();

    const add_to_cart = async (prod_id,size) => {
        if(!size){
            toast.error('Please select the Size first');
            return
        }
        let prod_data = structuredClone(card_item);
        if(prod_data[prod_id]){
            if(prod_data[prod_id][size]){
                prod_data[prod_id][size] +=1;
            }else{
                prod_data[prod_id][size] =1;
            }
        }else{
            prod_data[prod_id] = {};
            prod_data[prod_id][size] = 1;
        }
        setcard_item(prod_data);
    }
    const get_card_count = ()=>{
        let total_count =0;
        for(const prod_id in card_item){
            for(const size in card_item[prod_id]){
                total_count += card_item[prod_id][size];
            }
        }
        return total_count;
    }
    const update_qty = async (item,size,qty)=>{
        const cart_date = structuredClone(card_item);
        cart_date[item][size] = qty;
        setcard_item(cart_date);
    }

    const get_total_amt = ()=>{
        let total_amt = 0;
        for(const prod_id in card_item){
            let product_details = product.find((product)=>product._id === prod_id);
            for(const prod_line in card_item[prod_id]){
                total_amt += product_details.price * card_item[prod_id][prod_line]
            }
        }
        return total_amt;
    }
    // const get_product = async () => {
    // try {
    //     const response = await axios.get(`${backend_url}/api/product/list`);
    //     // console.log(response.data);
    //     if(response.data.success){
    //         setproduct(response.data.products)
    //         console.log(response.data.products)
    //     }else{
    //         toast.error(response.data.message)
    //     }
        
    // } catch (error) {
    //     onsole.log(error);
    //     toast.error(error.message)
    // }
    // };

    // useEffect(() => {
    // get_product();
    // }, []);






    const value = {
        product,currenecy,delhivery_fee,
        sreach,setsreach,showsreach,setshowsreach,
        add_to_cart,card_item,get_card_count,update_qty,
        get_total_amt,navigate,backend_url
    }
    return (
    <shopContext.Provider value={value}>
        {props.children}    
    </shopContext.Provider>
    )
}
export default ShopContextProvider;

// 05:10:15 Create Backendo
// 05:50:20 Create User Authentication feature
// 06:22:20 Create Product upload feature
// 07:08:44 Create authentication for Admin
// 07:24:23 Create Admin dashboard
// 08:01:55 Connect Backend APIs with Admin panel
// 09:24:00 Connect Backend APIs with eCommerce Website
// 10:32:55 Create Place Order feature
// 11:37:02 Display order details in Admin panel
// 12:10:59 Add Stripe payment gateway
// 12:45:52 Add Razorpay payment gateway
// 13:21:15 Deploy Full Stack project on Vercel
