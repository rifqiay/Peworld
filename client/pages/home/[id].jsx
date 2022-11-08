import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Image from "next/image";
import defaultPhoto from "../../public/default-photo.jpg";
import location from "../../public/location.svg";
import mail from "../../public/mail.svg";
import instagram from "../../public/instagram.svg";
import github from "../../public/github.svg";
import gitlab from "../../public/gitlab.svg";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShowPortfolio from "../../components/ShowPortfolio";
import ShowPengalaman from "../../components/ShowPengalaman";

const DetailProfile = () => {
  const [key, setKey] = useState("home");
  const [profile, setProfile] = useState([]);
  const [skills, setSkills] = useState([]);
  const [pengalaman, setPengalaman] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/worker/" + id)
      .then((res) => {
        const data = res.data.data[0];
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // skill
    axios
      .get(process.env.NEXT_PUBLIC_API + "/skills/" + id)
      .then((res) => {
        const data = res.data.data;
        setSkills(data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(process.env.NEXT_PUBLIC_API + "/experience/" + id)
      .then((res) => {
        const data = res.data.data[0];
        setPengalaman(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <Fragment>
      <style jsx>
        {`
          body {
            padding: 50px 0;
          }
          .latar {
            background-color: #5e50a1;
            height: 30vh;
            margin-top: 80px;
            border-radius: 8px 8px 0 0;
            border: 1px solid #ddd;
          }
          .latar2 {
            background-color: #fff;
            padding-bottom: 50px;
            border-radius: 0 0 8px 8px;
            border: 1px solid #ddd;
          }
          .photo {
            border-radius: 50%;
            position: relative;
            top: -74px;
            left: 46px;
          }
          .btn-hire {
            width: 100%;
            background-color: #5e50a1;
            color: white;
            border: none;
            padding: 12px 12px;
            font-weight: bold;
            border-radius: 4px;
          }
          .skil {
            background-color: orange;
            padding: 5px;
            border-radius: 4px;
          }
          span {
            margin-left: 10px;
          }
        `}
      </style>
      <Layout>
        <div className="container my-5">
          <div className="latar"></div>
          <div className="latar2">
            <div className="photo">
              {!profile.photo ? (
                <Image
                  src={defaultPhoto}
                  width="150px"
                  height="150px"
                  alt="avatar"
                  style={{ borderRadius: "15px" }}
                />
              ) : (
                <Image
                  src={profile.photo}
                  width="150px"
                  height="150px"
                  alt="avatar"
                  style={{ borderRadius: "15px" }}
                />
              )}
            </div>
            <div className="container">
              <h3>{profile.nama}</h3>
              {!pengalaman ? (
                <>
                  <p>Belum ada posisi</p>
                </>
              ) : (
                <p>{pengalaman.posisi}</p>
              )}
              <div className="location">
                <Image src={location} alt="location" />
                <span>{profile.domisili}</span>
              </div>
              <p className="mt-2">{profile.job_desc}</p>
              <div className="my-4 col-lg-6">
                <p>{profile.deskripsi_singkat}</p>
              </div>
              <div className="col-lg-3">
                <button className="btn-hire">Hire</button>
              </div>
              <div className="col-lg-3 my-5">
                <h4 className="mb-3">Skill</h4>
                <div className="row">
                  {skills.map((item) => (
                    <div key={item.id} className="col">
                      <p className="skil text-center">{item.nama_skill}</p>
                    </div>
                  ))}
                </div>
              </div>
              <section>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="d-flex justify-content-start">
                        <Image src={mail} alt="mail" />
                        <p className="mt-3 ms-3">{profile.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="d-flex justify-content-start">
                        <Image src={instagram} alt="instagram" />
                        <p className="mt-3 ms-3">@louist91</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="d-flex justify-content-start">
                        <Image src={github} alt="github" />
                        <p className="mt-3 ms-3">@louistommo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="d-flex justify-content-start">
                        <Image src={gitlab} alt="gitlab" />
                        <p className="mt-3 ms-3">@louistommo91</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* portfolio */}
              <section>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Portfolio">
                    <div className="container my-5">
                      <div className="row mt-4">
                        <ShowPortfolio id={id} />
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Pengalaman">
                    <ShowPengalaman id={id} />
                  </Tab>
                </Tabs>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default DetailProfile;
