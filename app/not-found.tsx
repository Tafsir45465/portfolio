import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="font-heading text-6xl font-semibold text-primary">404</p>
      <p className="text-muted">This page doesn't exist.</p>
      <Link href="/" className="rounded-full bg-primary px-6 py-3 font-medium text-bg">
        Back home
      </Link>
    </main>
  );
}
