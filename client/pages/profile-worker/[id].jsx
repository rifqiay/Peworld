import { useRouter } from "next/router";
import { Fragment } from "react";
import Skill from "../../components/Skills";
import Pengalaman from "../../components/Pengalaman";
import Portfolio from "../../components/Portfolio";
import EditProfile from "../../components/Edit";
import Layout from "../../components/layout";

const ProfileWorker = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Fragment>
      <style jsx>{`
        .latar {
          background-color: #5e50a1;
          height: 30vh;
          border-radius: 8px 8px 0 0;
        }

        .latar2 {
          background-color: #fff;
          padding-bottom: 50px;
        }

        .edit {
          position: relative;
          top: -90px;
        }

        .btn-w {
          width: 100%;
        }
      `}</style>
      <Layout>
        <div className="container">
          <div className="latar"></div>
          <div className="latar2">
            <div className="container edit">
              <div className="row">
                <EditProfile id={id} />
                <div className="col-lg-6 offset-lg-5 mt-4">
                  <Skill id={id} />
                </div>
                <section>
                  <div className="col-lg-6 offset-lg-5 mt-4">
                    <Pengalaman id={id} />
                  </div>
                </section>
                <section>
                  <div className="col-lg-6 offset-lg-5 mt-4">
                    <Portfolio id={id} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default ProfileWorker;
