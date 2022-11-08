import jwt_decode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Logo from "../../public/logo-nav.svg";

export default function Navbar() {
  const router = useRouter();
  const [id, setId] = useState("");

  const logOut = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const id = decoded.id;
    setId(id);
  }, []);
  return (
    <>
      <style jsx>
        {`
          .btn-nav {
            margin: 0 10px;
          }

          .btn-navbar {
            position: absolute;
            right: 65px;
            top: 9px;
          }
          .a {
            cursor: pointer !important;
          }
          @media only screen and (min-width: 992px) {
            .res-btn {
              display: none !important;
            }
          }
          @media only screen and (max-width: 991px) {
            .btn-navbar {
              display: none !important;
            }

            .a-navbar {
              display: none !important;
            }
          }
        `}
      </style>

      <div className="fixed-top">
        <div className="container">
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="container-fluid" style={{ cursor: "pointer" }}>
              <Link href="/">
                <a>
                  <Image src={Logo} alt="logo" />
                </a>
              </Link>
              <Link href="/home">
                <strong className="ms-5 a a-navbar">Home</strong>
              </Link>
              <div className="d-flex btn-navbar">
                <SplitButton
                  variant="outline-secondary"
                  title="Profile"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item>
                    {" "}
                    <Link href={`/profile-worker/${id}`} style={`None`}>
                      Profile
                    </Link>{" "}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                </SplitButton>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex align-items-center justify-content-end mt-3 res-btn">
                  <Link href="/home">
                    <strong className="me-5 a ">Home</strong>
                  </Link>
                  <SplitButton
                    variant="outline-secondary"
                    title="Profile"
                    id="segmented-button-dropdown-1"
                  >
                    <Dropdown.Item href="#">
                      <Link href={`/profile-worker/${id}`}>Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                  </SplitButton>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
