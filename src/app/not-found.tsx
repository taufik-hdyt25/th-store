import { ArrowLeft, HomeIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #000000, #1a1a1a)",
      }}
    >
      <div
        style={{
          padding: "2rem",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "5rem", marginBottom: "1rem", color: "red" }}>
          404
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: "whitesmoke",
          }}
        >
          Page Not Found
        </h2>
        <p style={{ marginBottom: "0.5rem", color: "gray" }}>
          Sorry, the page you are looking for cannot be found.
        </p>
        <p style={{ marginBottom: "2rem", color: "gray" }}>
          The page may have been moved, deleted, or the URL you entered is
          incorrect.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#000",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              width: "500px",
            }}
          >
            <HomeIcon size={18} />
            Kembali ke Beranda
          </Link>

          <Link
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "2px solid white",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={18} />
            Halaman Sebelumnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
