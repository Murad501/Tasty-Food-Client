import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
