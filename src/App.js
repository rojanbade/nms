import React from "react";
import "./App.css";
// import Counter from "./component/counter";
import Lifiting from "./component/lifiting";
// import Calculator from "./component/temperature/calculator";
// import Welcome from "./component/welcome";
import Product from "./component/product";
// import Card from "./component/card";
// import Clock from "./component/clock";
// import Login from "./component/login";
import TaskApp from "./component/todo";
// import Auth from "./component/auth";
// import { STUDENT } from "./constant";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./component/navbar";
import ProductDetail from "./component/product/detail";
import Platzi from "./component/platzi";
import AddProduct from "./component/platzi/product/add";
import { Counter } from "./component/counter";
import MyComponent from "./component/myComponent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Platzi />} />
        <Route path="/mycomponent" element={<MyComponent />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TaskApp />} />
        <Route path="/lifting" element={<Lifiting />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
