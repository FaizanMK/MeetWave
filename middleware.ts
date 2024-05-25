// read these docs : https://clerk.com/docs/references/nextjs/clerk-middleware

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// createRouteMatcher, this will allow us to match specific routes which we wanna make public or private

const protectedRoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  // it will match all the meeting routes
  "/meeting(.*)",
]);

// The createRouteMatcher() helper returns a function that, if called with the req object from the Middleware, will return true if the user is trying to access a route that matches one of the routes passed to createRouteMatcher().

// Use auth().protect() if you want to redirect unauthenticated users to the sign-in route automatically.
export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
