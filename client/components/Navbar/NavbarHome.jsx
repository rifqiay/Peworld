import axios from "axios";
import jwt_decode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Bell from "../../public/bell.svg";
import Profile from "../../public/icon-profile.svg";
import Logo from "../../public/logo-nav.svg";
import Mail from "../../public/mail.svg";

export default function Navbar() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const id = decoded.id;
    setId(id);
    axios
      .get(process.env.NEXT_PUBLIC_API + "/worker/" + id)
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
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
                top: 9px
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
              <div className="d-flex align-items-center btn-navbar">
                <div className="me-5">
                  <Image src={Bell} alt="bell" />
                </div>
                <div className="me-5">
                  <Image src={Mail} alt="mail" />
                </div>
                <Link href={`/profile-worker/${id}`}>
                  <a>
                    <div>
                      <Image
                        src={data.photo ? data.photo : Profile}
                        alt="profile"
                        width="35px"
                        height="35px"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  </a>
                </Link>
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
                  <div className="me-5">
                    <Image src={Bell} alt="bell" />
                  </div>
                  <div className="me-5">
                    <Image src={Mail} alt="mail" />
                  </div>
                  <div className="me-3">
                    <Image src={Profile} alt="profile" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
