import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  authPage: "/signup",
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
