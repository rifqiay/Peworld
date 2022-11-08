import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Talent from "../public/talent.svg";
import Talent2 from "../public/talent2.svg";
import Talent3 from "../public/talent3.svg";
import Ceklist from "../public/ceklist.svg";
import Ceklist2 from "../public/ceklist2.svg";
import Link from "next/link";
import { Fragment } from "react";
import Carousell from "../components/Carousell";

export default function Home() {
  return (
    <Fragment>
      <style jsx>
        {`
          .test {
            height: 150px;
          }
          span {
            margin-left: 10px;
          }
          .text {
            background-color: #5e50a1;
            padding: 30px;
            border-radius: 40px 8px;
          }
          .mb {
            margin-bottom: 100px;
          }
          @media only screen and (max-width: 600px) {
            h1 {
              font-size: normal;
              margin-top: 20px;
            }
            .mb h1 {
              font-size: 20px;
              margin-bottom: 20px;
            }
            .mulai {
              height: normal;
            }
          }
        `}
      </style>
      <Navbar />
      <div className="container">
        <main>
          <div className="row mt-5">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  vitae voluptatibus, magnam esse explicabo ipsum.
                </p>
                <Link href="/home">
                  <button className="btn btn-primary">
                    Mulai dari sekarang
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src={Talent} alt="talent" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <Image src={Talent2} alt="talent2" />
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2>Kenapa harus mencari talent di peworld</h2>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-5 offset-lg-1">
              <h1>Skil talent</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo rem, quo sunt aperiam aspernatur harum!
              </p>
              <div className="mt-3">
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Java</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Golang</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Kotlin</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>C++</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>PHP</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Ruby</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>JavaScript</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>10+ Bahasa lainnya</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Image src={Talent3} alt="talent3" />
            </div>
          </div>
        </main>
        <div>
          <h3 className="text-center">Their Opinion</h3>
          <div className="col-lg-10 offset-lg-1">
            <Carousell />
          </div>
        </div>

        <div className="container mb">
          <div className="row my-5 text">
            <div className="col-lg-4">
              <h1 className="text-light">Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="col d-flex justify-content-end align-items-center">
              <div>
                <Link href="/home">
                  <button className="btn btn-light mulai">
                    Mulai dari sekarang
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
