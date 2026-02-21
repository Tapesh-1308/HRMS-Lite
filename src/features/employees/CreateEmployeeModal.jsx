import { Modal, Form, Input, message } from "antd";
import { useCreateEmployeeMutation } from "../../services/employeeApi";
import { useEffect } from "react";

const CreateEmployeeModal = ({ open, onClose }) => {
    const [form] = Form.useForm();
    const [createEmployee, { isLoading, isSuccess, error }] =
        useCreateEmployeeMutation();

    const handleSubmit = async (values) => {
        try {
            await createEmployee(values).unwrap();
            message.success("Employee created successfully");
            form.resetFields();
            onClose();
        } catch (err) {
            message.error('Failed to create employee');
            console.error("Creation failed:", err);
        }
    };

    useEffect(() => {
        if (error?.data) {
            message.error(
                error.data.message ||
                    "Failed to create employee. Please check inputs.",
            );
        }
    }, [error]);

    return (
        <Modal
            title="Create Employee"
            open={open}
            onCancel={onClose}
            onOk={() => form.submit()}
            confirmLoading={isLoading}
            okText="Create"
        >
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <Form.Item
                    name="full_name"
                    label="Full Name"
                    rules={[
                        { required: true, message: "Full name is required" },
                    ]}
                >
                    <Input placeholder="Enter full name" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: "Email is required" },
                        { type: "email", message: "Enter valid email address" },
                    ]}
                >
                    <Input placeholder="Enter email" />
                </Form.Item>

                <Form.Item
                    name="department"
                    label="Department"
                    rules={[
                        { required: true, message: "Department is required" },
                    ]}
                >
                    <Input placeholder="Enter department" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateEmployeeModal;
