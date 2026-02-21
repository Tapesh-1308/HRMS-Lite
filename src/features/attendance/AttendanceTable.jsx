import { Table, Typography } from "antd";
import { useGetAttendanceQuery } from "../../services/attendanceApi";
import { Spin, Empty } from "antd";

const { Text } = Typography;

const AttendanceTable = ({ filters }) => {
    const filtersWithValues = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== undefined),
    );
    const { data, isLoading, isError, error, isFetching } =
        useGetAttendanceQuery(filtersWithValues);

    const columns = [
        {
            title: "Employee ID",
            dataIndex: "employee_id",
            key: "employee_id",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Text type={status === "Present" ? "success" : "danger"}>
                    {status}
                </Text>
            ),
        },
    ];

    if (isError)
        return (
            <Text type="danger">
                {error?.data?.message || "Failed to fetch attendance"}
            </Text>
        );

    return (
        <Table
            rowKey={(record) => `${record.employee_id}-${record.date}`}
            columns={columns}
            dataSource={data || []}
            pagination={{ pageSize: 5 }}
            locale={{ emptyText: "No attendance records found" }}
            loading={isLoading || isFetching}
        />
    );
};

export default AttendanceTable;
