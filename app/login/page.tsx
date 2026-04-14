import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Identity */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
          <span className="text-white font-[650] tracking-[-0.02em] text-[0.9375rem]">
            Albin Johansson
          </span>
        </div>

        {/* Description */}
        <p className="text-white/45 text-sm leading-relaxed mb-8">
          This portfolio is password protected. Enter the password to continue.
        </p>

        <form action={login} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs text-white/35 font-[500] px-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              autoFocus
              autoComplete="current-password"
              aria-invalid={!!error}
              aria-describedby={error ? "password-error" : undefined}
              className={`w-full px-4 py-3 rounded-full bg-white/[0.07] border text-white text-sm placeholder:text-white/25 outline-none transition-colors ${
                error
                  ? "border-red-400/50 focus:border-red-400/70"
                  : "border-white/[0.1] focus:border-white/30"
              }`}
            />
            {error && (
              <p id="password-error" className="text-xs text-red-400/80 px-1" role="alert">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 rounded-full bg-white text-[#0D0D0D] text-sm font-[600] hover:bg-white/80 active:bg-white/70 transition-colors cursor-pointer mt-1"
          >
            Continue
          </button>
        </form>

      </div>
    </div>
  );
}
