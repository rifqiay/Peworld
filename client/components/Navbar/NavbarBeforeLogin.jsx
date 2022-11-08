import Image from "next/image";
import Link from "next/link";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import Logo from "../../public/logo-nav.svg";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    // Perform localStorage action
    // const token = localStorage.getItem("token");
    // setIsLogin(token);
  }, []);
  return (
    <>
      <style jsx>
        {`
              .btn-nav {
                margin: 0 12px;
              }
        
              .btn-navbar {
                position: absolute;
                right: 65px;
                top: 9px
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
          
    `}
      </style>

      <div className="fixed-top">
        <div className="container">
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="container-fluid">
              <Image src={Logo} alt="logo" />
              <div className="d-flex btn-navbar">
                <SplitButton
                  variant="outline-secondary"
                  title="Masuk"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item>
                    <Link href="/login">Masuk Sebagai Pekerja</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="#">Masuk Sebagai Rekruter</Link>
                  </Dropdown.Item>
                </SplitButton>
                <div className="btn-nav"></div>
                <SplitButton
                  variant="outline-secondary"
                  title="Daftar"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item className="btn-nav">
                    <Link href="/register-job">Daftar Sebagai Pekerja</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="#">Daftar Sebagai Rekruter</Link>
                  </Dropdown.Item>
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
                <div className="d-flex res-btn">
                  <SplitButton
                    variant="outline-secondary"
                    title="Masuk"
                    id="segmented-button-dropdown-1"
                  >
                    <Dropdown.Item>
                      <Link href="/login">Masuk Sebagai Pekerja</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="#">Masuk Sebagai Rekruter</Link>
                    </Dropdown.Item>
                  </SplitButton>
                  <div className="btn-nav"></div>
                  <SplitButton
                    variant="outline-secondary"
                    title="Daftar"
                    id="segmented-button-dropdown-1"
                  >
                    <Dropdown.Item>
                      <Link href="/register-job">Daftar Sebagai Pekerja</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="#">Daftar Sebagai Rekruter</Link>
                    </Dropdown.Item>
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
