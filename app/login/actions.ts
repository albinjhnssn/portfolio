// Password protection is currently disabled.
// To re-enable: add a middleware.ts at the project root that checks the "auth" cookie
// and redirects unauthenticated requests to /login.
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password") as string;

  if (password === "albin-2026") {
    const cookieStore = await cookies();
    cookieStore.set("auth", "albin-2026", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    redirect("/");
  }

  redirect("/login?error=1");
}
