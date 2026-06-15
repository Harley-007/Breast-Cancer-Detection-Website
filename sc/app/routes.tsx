import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import AboutBreastCancer from "./pages/AboutBreastCancer";
import RiskAssessment from "./pages/RiskAssessment";
import ScreeningMethods from "./pages/ScreeningMethods";
import SelfExamination from "./pages/SelfExamination";
import Resources from "./pages/Resources";
import ImageAnalysis from "./pages/ImageAnalysis";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutBreastCancer },
      { path: "risk-assessment", Component: RiskAssessment },
      { path: "screening", Component: ScreeningMethods },
      { path: "self-exam", Component: SelfExamination },
      { path: "image-analysis", Component: ImageAnalysis },
      { path: "resources", Component: Resources },
      { path: "*", Component: NotFound },
    ],
  },
]);
