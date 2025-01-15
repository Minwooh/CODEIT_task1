import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      style={{
        backgroundColor: "#586",
        padding: "0 19%",
        width: "100vw",
        height: "60px",
        marginLeft: "20%",
      }}
    >
      <Link href="/">
        <img
          src="/images/large_logo.png"
          alt="상단 로고"
          style={{ width: "151px", height: "40px" }}
        />
      </Link>
    </nav>
  );
}
