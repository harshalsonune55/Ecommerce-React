import Navber from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import Category from "../components/category/category.jsx";
import Cards from "../components/cards/card.jsx";
import Footer from "../components/footer/footer.jsx";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
export default function Home() {
    let[purchase,setpurchase]=useState(0);
    const cartItems = useSelector((state) => state.cart.cartItems);
    useEffect(() => {
        setpurchase(cartItems.length);
      }, [cartItems]);



    return(
        <>
        <Navber purchase={purchase}/>
        <Category/>
        <Banner/>
        <Cards/>
        <Footer/>
        </>
    );
  }