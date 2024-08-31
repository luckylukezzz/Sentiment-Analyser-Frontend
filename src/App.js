import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import {
  AllAnalytics,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  SentimentPie,
  EmotionPie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Search,
} from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const isDashboardRoute = () => {
    return location.pathname.startsWith("/dashboard");
  };

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {isDashboardRoute() && (
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        )}
        {isDashboardRoute() &&
          (activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ))}
        <div
          className={
            activeMenu && isDashboardRoute()
              ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
              : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
          }
        >
          {isDashboardRoute() && (
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          )}
          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* landing/login/logout */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/" element={<Landing />} />
              {/* dashboard */}
              <Route
                path="/dashboard/"
                element={<PrivateRoute element={AllAnalytics} />}
              />
              <Route
                path="/dashboard/search"
                element={<PrivateRoute element={Search} />}
              />
              <Route
                path="/dashboard/All-Analytics"
                element={<PrivateRoute element={AllAnalytics} />}
              />

              {/* pages */}
              <Route
                path="/dashboard/orders"
                element={<PrivateRoute element={Orders} />}
              />
              <Route
                path="/dashboard/employees"
                element={<PrivateRoute element={Employees} />}
              />
              <Route
                path="/dashboard/customers"
                element={<PrivateRoute element={Customers} />}
              />

              {/* apps */}
              <Route
                path="/dashboard/kanban"
                element={<PrivateRoute element={Kanban} />}
              />
              <Route
                path="/dashboard/editor"
                element={<PrivateRoute element={Editor} />}
              />
              <Route
                path="/dashboard/calendar"
                element={<PrivateRoute element={Calendar} />}
              />
              <Route
                path="/dashboard/color-picker"
                element={<PrivateRoute element={ColorPicker} />}
              />

              {/* charts */}
              <Route
                path="/dashboard/line"
                element={<PrivateRoute element={Line} />}
              />
              <Route
                path="/dashboard/area"
                element={<PrivateRoute element={Area} />}
              />
              <Route
                path="/dashboard/bar"
                element={<PrivateRoute element={Bar} />}
              />
              <Route
                path="/dashboard/sentiment-pie"
                element={<PrivateRoute element={SentimentPie} />}
              />
              <Route
                path="/dashboard/emotion-pie"
                element={<PrivateRoute element={EmotionPie} />}
              />
              <Route
                path="/dashboard/financial"
                element={<PrivateRoute element={Financial} />}
              />
              <Route
                path="/dashboard/color-mapping"
                element={<PrivateRoute element={ColorMapping} />}
              />
              <Route
                path="/dashboard/pyramid"
                element={<PrivateRoute element={Pyramid} />}
              />
              <Route
                path="/dashboard/stacked"
                element={<PrivateRoute element={Stacked} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
