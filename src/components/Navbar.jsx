import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            onClick={(e) => navigate(e.key)}
            items={[
                { label: "Home", key: "/" },
                { label: "Employees", key: "/employees" },
                { label: "Attendance", key: "/attendance" },
            ]}
        />
    );
};

export default Navbar;
