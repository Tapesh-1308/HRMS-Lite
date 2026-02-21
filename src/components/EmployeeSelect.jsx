import { Select } from "antd";
import { useGetEmployeesQuery } from "../services/employeeApi";

const EmployeeSelect = ({
    value,
    onChange,
    placeholder = "Search or select employee",
    style = { width: 300 },
}) => {
    const { data: employees = [], isLoading } = useGetEmployeesQuery();

    return (
        <Select
            showSearch
            allowClear
            value={value}
            placeholder={placeholder}
            loading={isLoading}
            style={style}
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) => {
                const label = option?.children?.toString().toLowerCase();
                return label.includes(input.toLowerCase());
            }}
        >
            {employees.map((emp) => (
                <Select.Option key={emp.employee_id} value={emp.employee_id}>
                    {emp.full_name} (ID: {emp.employee_id})
                </Select.Option>
            ))}
        </Select>
    );
};

export default EmployeeSelect;
