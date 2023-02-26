import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
