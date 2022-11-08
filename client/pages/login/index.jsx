import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Swal from "sweetalert2";
import Background from "../../public/bg.svg";
import Logo from "../../public/logo.svg";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    sandi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(process.env.NEXT_PUBLIC_API + "/worker/login", form)
      .then((res) => {
        setLoading(false);
        const token = res.data.data.token;
        localStorage.setItem("token", token);
        router.replace("/");
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          text: error.response.data.message,
          icon: "error",
        });
      });
  };

  return (
    <Fragment>
      <style jsx>{`
        body {
          padding: 30px 0;
        }

        .test {
          background-color: salmon;
        }
        .h {
          height: 90vh;
        }

        .a {
          background-color: #3913faa4;
        }

        .bg {
          box-sizing: border-box;
          background-size: cover;
        }

        .h-bg {
          height: 100%;
        }

        .text {
          width: 400px;
        }

        .logo {
          margin: 15px 50px;
        }

        .title {
          height: 80%;
        }

        .btn-w {
          width: 100%;
          color: #fff;
          font-weight: bold;
          border-radius: 4px;
          padding: 7px 12px;
        }

        .btn-w:hover {
          color: #fff !important;
        }

        .h-form {
          height: 100%;
          box-sizing: border-box;
          padding: 0 50px;
        }

        input {
          padding: 10px 15px !important;
          border-radius: 4px !important;
        }

        .row > * {
          padding-right: 0;
          padding-left: 0;
        }
        @media only screen and (max-width: 600px) {
          .responsiv {
            display: none;
          }
          p {
            font-size: 15px;
          }
        }
      `}</style>
      {/* content */}
      <div className="container mt-3">
        <main>
          <div className="row h">
            <div
              className="col-lg-6 bg box responsiv"
              style={{
                backgroundImage: `url(${Background.src})`,
              }}
            >
              <div className="a h-bg">
                <div className="row">
                  <div className="col logo">
                    <Image src={Logo} alt="" width="100" height="" />
                  </div>
                </div>
                <div className="title d-flex justify-content-center align-items-center">
                  <div className="text">
                    <h1 className="text-light">
                      Temukan developer berbakat & dan terbaik di berbagai
                      bidang pilihan
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="col-lg-6">
              <section className="d-flex justify-content-center align-items-center h-form">
                <div>
                  <h1>Halo, Pewpeople</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique autem molestiae, aut quaerat maxime voluptatum.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Masukan alamat email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="psw">Kata Sandi</label>
                      <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Masukan kata sandi"
                        id="psw"
                        name="sandi"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <p className="my-3">
                        <a href="#">Lupa kata sandi?</a>
                      </p>
                    </div>
                    {loading ? (
                      <button className="btn-w btn btn-warning">
                        <span
                          className="spinner-border text-light spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <button type="submit" className="btn-w btn btn-warning">
                        Masuk
                      </button>
                    )}
                    <p className="text-center mt-3">
                      Anda belum punya akun?{" "}
                      <Link href="/register-job">Daftar disini</Link>
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}
