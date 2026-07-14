import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center bg-grid px-6 text-center">
      <p className="font-mono text-cyan text-sm tracking-widest uppercase mb-4">404</p>
      <h1 className="font-display text-4xl sm:text-5xl mb-4">This route doesn&apos;t exist yet.</h1>
      <p className="text-paper/60 max-w-md mb-8">
        The page you&apos;re looking for was moved, renamed, or never built. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="px-5 py-3 rounded-full bg-paper text-ink font-mono text-sm hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
