export type Role = "ADMIN" | "TEACHER" | "STUDENT" | "NONE";

export const Roles = {
    ADMIN: "ADMIN",
    TEACHER: "TEACHER",
    STUDENT: "STUDENT",
    NONE: "NONE",
} as const;
