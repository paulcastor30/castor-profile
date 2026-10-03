import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchData from "./components/SearchData";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LabLayout from "./components/LabLayout";
import LabHome from "./pages/LabHome";
import LabResearch from "./pages/LabResearch";
import LabPeople from "./pages/LabPeople";
import LabProject from "./pages/LabProject";
import LabContact from "./pages/LabContact";
import RouteFocus from "./components/RouteFocus";

export function AppRoutes() {
  return <><RouteFocus /><SearchData /><Routes>
    <Route path="/" element={<Index />} />
    <Route path="/lab" element={<LabLayout />}>
      <Route index element={<LabHome />} />
      <Route path="research" element={<LabResearch />} />
      <Route path="research/:slug" element={<LabProject />} />
      <Route path="people" element={<LabPeople />} />
      <Route path="contact" element={<LabContact />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes></>;
}

export default function App() { return <BrowserRouter><AppRoutes /></BrowserRouter>; }
