import { Table, Button, Popconfirm, Typography, message } from "antd";
import {
    useGetEmployeesQuery,
    useDeleteEmployeeMutation,
} from "../../services/employeeApi";
import { Spin, Empty } from "antd";
import { useState } from "react";

const { Text } = Typography;

const EmployeeTable = () => {
    const { data, isLoading, isFetching, isError, error } = useGetEmployeesQuery();
    const [deleteEmployee, { isLoading: isDeleting }] =
        useDeleteEmployeeMutation();
    const [deletingId, setDeletingId] = useState(null);

    const handleDelete = async (id) => {
        try {
            setDeletingId(id);
            await deleteEmployee(id).unwrap();
            message.success("Employee deleted successfully");
        } catch (err) {
            message.error('Failed to delete employee');
            console.error("Delete failed", err);
        } finally {
            setDeletingId(null);
        }
    };

    const columns = [
        {
            title: "Employee ID",
            dataIndex: "employee_id",
            key: "employee_id",
        },
        {
            title: "Full Name",
            dataIndex: "full_name",
            key: "full_name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Department",
            dataIndex: "department",
            key: "department",
        },
        {
            title: "Total Present Days",
            dataIndex: "total_present_days",
            key: "total_present_days",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure to delete?"
                    onConfirm={() => handleDelete(record.employee_id)}
                >
                    <Button danger loading={isDeleting && deletingId === record.employee_id}>
                        Delete
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    // if (isLoading)
    //     return (
    //         <div style={{ textAlign: "center", padding: 40 }}>
    //             <Spin size="large" />
    //         </div>
    //     );

    if (isError)
        return (
            <Text type="danger">
                {error?.data?.message || "Something went wrong"}
            </Text>
        );

    return (
        <Table
            rowKey="employee_id"
            columns={columns}
            dataSource={data || []}
            pagination={{ pageSize: 5 }}
            locale={{
                emptyText: <Empty description="No employees found" />,
            }}
            loading={isLoading || isFetching}
        />
    );
};

export default EmployeeTable;
