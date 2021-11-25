import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import ReactLoading from 'react-loading';
import { useHistory } from "react-router";

import orderHistoryLogo from '../../assets/image/grocerylist/Image.png';
import postData from '../postData';

import { checkLogin } from "../common.modules";
import "./index.css";

const GroceryList = (props) => {
  // const { groceryListData } = props;
  const [groceryListData,setGroceryListData]=useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [loading,setLoading]=useState(false);
  const history=useHistory();
  useEffect(async()=>{
   if(localStorage.getItem("h_auth_token"))
  {
    let data = new FormData();
    data.append('action', 'listGrocery');
    data.append('hotel_id', '1');
    let response=await postData(data);
    
    if(response.success=="1")
    {
      let ggroceryListData=response.data;

      for(let i in ggroceryListData)
      {
        ggroceryListData[i].qty=0;
      }
      
      setGroceryListData(ggroceryListData);
      }
    }
    else
    {
      checkLogin(history);
    }   

  },[])
  
  const btnHandler=(index,type)=>{
    let ggroceryListData=[...groceryListData];
    
   
    if(type=="p")
    {
      ggroceryListData[index].qty=ggroceryListData[index].qty+1;
    }
    else
    {
      if(ggroceryListData[index].qty!="0")
      {
        ggroceryListData[index].qty=ggroceryListData[index].qty-1;
      }
    }

    console.log(ggroceryListData);
    setGroceryListData(ggroceryListData);
  }

  const orderHandler=async()=>{
    setLoading(true);
    setMsg("");
    setErr("");
    let orders=[];
    let ggroceryListData=groceryListData;
    for(let grocery of groceryListData)
    { 
      console.log(grocery);
      console.log(grocery.qty);
      if(grocery.qty>0)
      { console.log("if");
        orders.push({"id":grocery.id,"qty":grocery.qty,"name":grocery.name})
      }
    }

    let items=JSON.stringify(orders);

    var data = new FormData();
    data.append('action', 'groceryOrder');
    data.append('hotel_id', '2');
    data.append('reservation_id', '1');
    data.append('items', items);

    
    let response=await postData(data);
  
    if(response.success=="1")
    {
      for(let i in ggroceryListData)
      {
        ggroceryListData[i].qty=0;
      }
      setMsg("Grocery order has been added");
      setLoading(false);
      setGroceryListData(ggroceryListData);
    }
    else
    {
      setErr("Error while adding grocery order");
      setLoading(false);
    }
  }
  return (
    
    <Layout>

      <div className="grocery-list-body">
        {groceryListData.map((groceryData, index) => (
         
          <div className="grocery-item" key={index}>
            {console.log("q",groceryData.qty,groceryData.image)}
            <img className="grocery-item-logo" src={`http://hotels-backend.poy4obviki-zng4p707o4dp.p.runcloud.link/files/${groceryData.image}`}/>
            <span className="grocery-item-title">{groceryData.name}</span><br/>
            <span className="grocery-item-amount">{groceryData.qty}</span>
            <button className="btn-min" onClick={(e)=>btnHandler(index,"m")}></button>
            <button className="btn-plus" onClick={(e)=>btnHandler(index,"p")}></button>
          </div>
        ))}

{loading?
            <div style={{width:"26%",margin:"auto",marginTop:"10px"}}>
            <ReactLoading type="spin" color="#FD6D6D" height={50} width={50} className="text-center"/>
             </div>:null}   

                {err!=""?<div class="error">{err}</div>:null}
            {msg!=""?<div class="msg-notfication">{msg}</div>:null} 
        <div style={{position:"fixed", width: "100%", bottom: "165px"}}>
          <button className="btn-create" onClick={orderHandler}>Create Order</button>
        </div>
      </div>
    </Layout>
  );
};

export default GroceryList;
