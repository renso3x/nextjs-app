export { default } from "next-auth/middleware";

// Protecting Routes
export const config = {
    matcher: ['/users/:id*']
}