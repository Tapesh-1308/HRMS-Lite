import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EmployeesPage from "../features/employees/EmployeesPage";
import AttendancePage from "../features/attendance/AttendancePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
        </Routes>
    );
};

export default AppRoutes;
