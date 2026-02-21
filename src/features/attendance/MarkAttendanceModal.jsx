import { Modal, Form, Select, DatePicker, message } from "antd";
import { useMarkAttendanceMutation } from "../../services/attendanceApi";
import { useEffect } from "react";
import EmployeeSelect from "../../components/EmployeeSelect";

const { Option } = Select;

const MarkAttendanceModal = ({ open, onClose }) => {
    const [form] = Form.useForm();
    const [markAttendance, { isLoading, error }] = useMarkAttendanceMutation();

    const handleSubmit = async (values) => {
        try {
            await markAttendance({
                employee_id: values.employee_id,
                date: values.date.format("YYYY-MM-DD"),
                status: values.status,
            }).unwrap();

            message.success("Attendance marked successfully");
            form.resetFields();
            onClose();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (error?.data) {
            message.error(error.data.message || "Failed to mark attendance");
        }
    }, [error]);

    return (
        <Modal
            title="Mark Attendance"
            open={open}
            onCancel={onClose}
            onOk={() => form.submit()}
            confirmLoading={isLoading}
        >
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <Form.Item
                    name="employee_id"
                    label="Employee"
                    rules={[{ required: true, message: "Select employee" }]}
                >
                    <EmployeeSelect />
                </Form.Item>

                <Form.Item
                    name="date"
                    label="Date"
                    rules={[{ required: true }]}
                >
                    <DatePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="status"
                    label="Status"
                    rules={[{ required: true }]}
                >
                    <Select>
                        <Option value="Present">Present</Option>
                        <Option value="Absent">Absent</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default MarkAttendanceModal;
