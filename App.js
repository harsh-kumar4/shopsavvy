import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Payment from "./Payment";
import Orders from "./Orders";
import Home from "./Home";
import Busi from "./busi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";

const promise = loadStripe(
  "pk_test_51N4j3iSEJFE6uX4uaDJLGr8oYIc3sSLSuvoaicxxXkcDBjxZy6oekxfRIEiBfF7tpsja5BG8KmW11wAb4cB4zksj00PCYfyylK"
);
function App() {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setopen] = useState(1);
  const alert = () => {
    if (open === 1) 
    {
      Swal.fire(
        "PLEASE LOGIN OR CREATE NEW ACCOUNT BEFORE ADDING ITEMS TO CART"
      );
     
    }
  };

  useEffect(() => {
    // will only run once
    {alert()}
    setopen(2);
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);

      if (authUser) {
        //just logged in
        // Ritik
        dispatch({
          type: "SET",
          user: authUser,
        });
      } else {
        //logegd out
        dispatch({
          type: "SET",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM

    <Router>
     
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Checkout />]} />

          <Route
            path="/payment"
            element={[
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />

          <Route path="/payment" element={[<Payment />]} />
          <Route path="/busi" element={[<Busi />]} />
          <Route path="/orders" element={[<Orders />]} />
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
