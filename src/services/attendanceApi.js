import { api } from "./api";

export const attendanceApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAttendance: builder.query({
            query: (params) => {
                const queryParams = new URLSearchParams(params).toString();
                return `attendance/?${queryParams}`;
            },
            providesTags: ["Attendance"],
        }),

        markAttendance: builder.mutation({
            query: (body) => ({
                url: "attendance/mark/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Attendance"],
        }),
    }),
});

export const { useGetAttendanceQuery, useMarkAttendanceMutation } =
    attendanceApi;
