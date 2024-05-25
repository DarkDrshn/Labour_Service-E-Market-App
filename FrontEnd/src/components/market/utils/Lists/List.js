import React from "react";
import "./List.css";
import Listitem from "./Item/Listitem";
import Cookies from "js-cookie";

const List = ({ list , handleClientConnectClick , handleLaborerConnectClick,clientLoggedIn,laborerLoggedIn,clientId ,fetchBookingRequests,laborerId}) => {
  // console.log({list});
  console.log(clientLoggedIn);
  return (
    <>
      <div className=" grid grid-cols-3 gap-8">
      {/* {console.log("clientId",clientId)} */}
          {list.map((item,index) => (
            
            <Listitem 
              key={index}
              item={item} 
              handleClientConnectClick={handleClientConnectClick}
              handleLaborerConnectClick = {handleLaborerConnectClick}
              clientLoggedIn={clientLoggedIn}
              laborerLoggedIn={laborerLoggedIn}
              clientId={Cookies.get("clientId")}
              laborerId={Cookies.get("labourId")}
            />
        ))}
      </div>
    </>
  );
};

export default List;
