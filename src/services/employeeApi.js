import { api } from "./api";

export const employeeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => "employees/",
            providesTags: ["Employee"],
        }),

        createEmployee: builder.mutation({
            query: (body) => ({
                url: "employees/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Employee"],
        }),

        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `employees/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: ["Employee"],
        }),
    }),
});

export const {
    useGetEmployeesQuery,
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,
} = employeeApi;
