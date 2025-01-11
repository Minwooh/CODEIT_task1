import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <img src="/images/large_logo.png" alt="상단 로고" />
      </Link>
    </nav>
  );
}
