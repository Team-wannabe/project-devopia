import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/dashboard";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Timer from "./components/Timer";
// import Room from "./pages/Room";

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    )
};