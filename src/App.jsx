import { useState } from "react";
import Header from "./components/Header";
import ContentList from "./components/ContentList";

function App() {
  return (
    <div className="mx-auto my-0 min-h-screen">
      <Header />
      <ContentList />
    </div>
  );
}

export default App;
