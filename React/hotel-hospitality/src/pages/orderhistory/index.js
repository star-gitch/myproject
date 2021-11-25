import React, { useState, useEffect } from "react";

import Layout from "../../components/layout";
import orderHistoryLogo from '../../assets/image/orderhistory/logo.png';
import postData from '../postData';
import { checkLogin } from "../common.modules";

const OrderHistory = (props) => {
  // const { historyListData } = props;
  const [historyListData,setHistoryListData]=useState([]);
  const [open,setOpen]=useState("none");
  const [itemsData,setItemsData]=useState([]);
  useEffect(async()=>{
    var data = new FormData();
    data.append('action', 'orderHistory');
    let response=await postData(data);
    if(response.success=="1")
    {
      setHistoryListData(response.data)
    }
  },[])

  const showPopup=(items)=>{
    let itemsData=JSON.parse(items);

    setItemsData(itemsData);
    setOpen("block");
    
  }
  return (

    <Layout>
          
          <div class="modal" style={{display:open}}   role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Grocery Items</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"  onClick={(e)=>setOpen("none")}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table">
            <thead>
              <tr>
                <td>Item Name</td>
                <td>Qty</td>
              </tr>
             </thead>

             <tbody>
             {itemsData.map((itemData,index) => (
                <tr>
                    <td>{itemData.name}</td>
                    <td>{itemData.qty}</td>
                </tr>

             ))}

             </tbody>

        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={(e)=>setOpen("none")}>Close</button>
      </div>
    </div>
  </div>
</div>
      
      <div className="history-body">
     
        {historyListData.map((historyData,index) => (
          <div className="hotory-item" key={index} onClick={()=>showPopup(historyData.items)}>
            <img className="hitory-item-logo" src={orderHistoryLogo}/>
            <span className="hitory-item-title">Moon Retreat</span><br/>
            <span className="hitory-item-description">E55 Al Shuwaib - Umm Al Quwain Rd Sharjah - ОАЭ</span>
            <span className="hitory-item-name">Item{index+1}</span>
            <span className="hitory-item-order">Order On:&nbsp;</span>
            <span className="hitory-item-time">{historyData.ordered_date} at {historyData.order_time}</span>
            <button className="btn-delivered">{historyData.status=="1"?"Delivered":"Pending"}</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default OrderHistory;
