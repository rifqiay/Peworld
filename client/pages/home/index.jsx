import { Fragment } from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import defaultPhoto from "../../public/default-photo.jpg";
import Location from "../../public/location.svg";
import axios from "axios";
import Link from "next/link";

const Home = ({ profile }) => {
  return (
    <Fragment>
      <style jsx>{`
        .top-jobs {
          background-color: #5e50a1;
          padding: 10px;
          margin-top: 56px;
        }
        .locatio {
          height: 20px;
          margin-right: 5px;
        }
        .skil {
          background-color: orange;
          margin: 3px 3px;
          border-radius: 4px;
          padding: 5px;
        }
      `}</style>
      <Layout>
        <section>
          <div className="top-jobs">
            <div className="container text-light">
              <h3>Top Jobs</h3>
            </div>
          </div>
        </section>

        <section>
          <div className="container my-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for any Skil"
              />
              <select>
                <option defaultValue>Kategori</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="container">
            <div className="row">
              {profile.map((e) => (
                <Link key={e.id} href={`home/${e.id}`}>
                  <div className="col-lg-3 mt-3">
                    <div className="card p-2">
                      <div className="col-6">
                        {!e.photo ? (
                          <Image
                            src={defaultPhoto}
                            height="100"
                            width="100"
                            alt="avatar"
                          />
                        ) : (
                          <Image
                            src={e.photo}
                            height="100"
                            width="100"
                            alt="avatar"
                            style={{ borderRadius: "10px" }}
                          />
                        )}
                      </div>
                      <h4>{e.nama}</h4>
                      <p>Web developer</p>

                      <div className="d-flex">
                        <div className="locatio">
                          <Image src={Location} alt="location" />
                        </div>
                        <span>Lorem, ipsum.</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="skil">PHP</p>
                        <p className="skil">JavaScript</p>
                        <p>8+</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API + "/worker");
  return {
    props: { profile: res.data.data },
  };
}

export default Home;
