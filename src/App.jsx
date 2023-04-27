import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ManageSolutions } from "./screens/ManageSolutions";
import { ManageSolutionsScreen } from "./screens/ManageSolutionsScreen";
import { ManageSolutions1 } from "./screens/ManageSolutions1";
import { Sm } from "./screens/Sm";
import { ButtonComponent } from "./screens/ButtonComponent";
import { CardFrame } from "./screens/CardFrame";
import { ReactPrimeButton } from "./screens/ReactPrimeButton";
import { ReactPrimeCalendar } from "./screens/ReactPrimeCalendar";
import { VzLuxceVzbutton } from "./screens/VzLuxceVzbutton";
import { PrimereactToStoryToFigmaToTokenToSassToVzreactToStory } from "./screens/PrimereactToStoryToFigmaToTokenToSassToVzreactToStory";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ManageSolutions1 />,
  },
  {
    path: "/ManageSolutionsScreen",
    element: <ManageSolutionsScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
