import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

export default function App() {
    return (
        <>
            <div className="body-container">
                <Nav />
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}
