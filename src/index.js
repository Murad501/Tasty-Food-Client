import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContext from "./Context/UserContext";
import { PhotoProvider } from "react-photo-view";
import FoodContext from "./Context/FoodContext";
import DashboardContext from "./Context/DashboardContext";
import CategoryContext from "./Context/CategoryContext";
import LoadingContext from "./Context/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <LoadingContext>
          <FoodContext>
            <CategoryContext>
              <DashboardContext>
                <App />
              </DashboardContext>
            </CategoryContext>
          </FoodContext>
        </LoadingContext>
      </PhotoProvider>
    </UserContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
