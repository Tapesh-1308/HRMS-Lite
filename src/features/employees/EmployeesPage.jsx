import { Button, Space, Typography } from "antd";
import { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import CreateEmployeeModal from "./CreateEmployeeModal";

const { Title } = Typography;

const EmployeesPage = () => {
    const [open, setOpen] = useState(false);

    return (
        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
            <Title level={2}>Employee Management</Title>

            <Button type="primary" onClick={() => setOpen(true)}>
                Create Employee
            </Button>

            <EmployeeTable />

            <CreateEmployeeModal open={open} onClose={() => setOpen(false)} />
        </Space>
    );
};

export default EmployeesPage;
