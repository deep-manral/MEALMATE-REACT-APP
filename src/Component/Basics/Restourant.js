import React, { useState } from 'react'
import"./style.css"
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar.js"
const uniqueList=[
    ...new Set(
        Menu.map((curElem)=>{
            return curElem.category;
        })
    ),
    "All",
];
 const Restourant = () => {
    
  const[menuData,setMenuData]=useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);
  const filterItem=(category)=>{
  const updatedList=Menu.filter((curElem)=>{
    return curElem.category===category;
  });
  setMenuData(updatedList);
  };
  return (
   <>
<Navbar filterItem={filterItem} menuList={menuList}/>
<MenuCard menuData={menuData}/>
   </>
  );
};
export default Restourant

