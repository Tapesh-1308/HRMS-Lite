import { useState } from "react";
import { Button, Space, Typography } from "antd";
import AttendanceTable from "./AttendanceTable";
import MarkAttendanceModal from "./MarkAttendanceModal";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import EmployeeSelect from "../../components/EmployeeSelect";

const { Title } = Typography;

const AttendancePage = () => {
    const [open, setOpen] = useState(false);
    const [filters, setFilters] = useState({});

    return (
        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
            <Title level={2}>Attendance Management</Title>

            <Space>
                <EmployeeSelect
                    value={filters.employee_id}
                    onChange={(value) =>
                        setFilters((prev) => ({
                            ...prev,
                            employee_id: value,
                        }))
                    }
                />
                
                <DatePicker
                    placeholder="Filter by Date"
                    onChange={(date) =>
                        setFilters((prev) => ({
                            ...prev,
                            date: date
                                ? dayjs(date).format("YYYY-MM-DD")
                                : undefined,
                        }))
                    }
                />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Mark Attendance
                </Button>
            </Space>

            <AttendanceTable filters={filters} />

            <MarkAttendanceModal open={open} onClose={() => setOpen(false)} />
        </Space>
    );
};

export default AttendancePage;
