import React from "react";
import "./App.css";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import ViewProduct from "./components/ViewProduct";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FluentProvider,
  webLightTheme
} from "@fluentui/react-components";
import Counter from "./components/counter/counter";

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<AddProduct />} />
            <Route path="/products/:pk/update" element={<UpdateProduct />} />
            <Route path="/products/:pk/view" element={<ViewProduct />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </div>
    </FluentProvider>
  );
}

export default App;
