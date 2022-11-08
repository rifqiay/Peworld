import { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import Swal from "sweetalert2";
const fileTypes = ["JPG", "PNG", "GIF"];

const Portfolio = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const handleUpload = (file) => {
    setFile(file);
  };
  const [portfolio, setPortfolio] = useState({
    nama_app: "",
    link_repository: "",
    type_app: "",
    photo: "",
    id_worker: id,
  });

  const handlePortfolio = (e) => {
    setPortfolio({
      ...portfolio,
      [e.target.name]: e.target.value,
    });
  };

  const portfolioSubmit = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("nama_app", portfolio.nama_app);
    formData.append("link_repository", portfolio.link_repository);
    formData.append("type_app", portfolio.type_app);
    formData.append("photo", file);
    formData.append("id_worker", portfolio.id_worker);
    e.preventDefault();
    axios
      .post(process.env.NEXT_PUBLIC_API + "/portfolio/create", formData)
      .then((res) => {
        setLoading(false);
        Swal.fire({
          text: res.data.message,
          icon: "success",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <style jsx>{`
        .sc-bcXHqe {
          height: 200px;
          margin-right: 12px;
        }
        .btn-w {
          width: 180px;
        }
        media only screen and (max-width: 600px) {
          .lkjDVC {
            height: 200px !important;
            margin-right: 12px;
          }
        }
      `}</style>
      <div className="card">
        <h4 className="ms-4 mt-4">Portfolio</h4>
        <hr />
        <div className="container">
          <form onSubmit={portfolioSubmit}>
            <div className=" mt-3">
              <label htmlFor="app">Nama aplikasi</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Masukan nama aplikasi"
                id="app"
                name="nama_app"
                onChange={handlePortfolio}
              />
            </div>
            <div className=" mt-3">
              <label htmlFor="repo">Link repository</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Masukan link repository"
                id="repo"
                name="link_repository"
                onChange={handlePortfolio}
              />
            </div>
            <div className=" mt-3">
              <div>
                <input
                  type="radio"
                  id="mobile"
                  name="type_app"
                  value="aplikasi-mobile"
                  onChange={handlePortfolio}
                />
                <label htmlFor="mobile" className="ms-2">
                  Aplikasi mobile
                </label>
                <input
                  type="radio"
                  id="web"
                  className="ms-3"
                  name="type_app"
                  value="aplikasi-web"
                  onChange={handlePortfolio}
                />
                <label htmlFor="web" className="ms-2">
                  Aplikasi web
                </label>
              </div>
            </div>
            <div className="mt-3">
              <strong className="mb-3">Upload gambar</strong>
              <div>
                <FileUploader
                  handleChange={handleUpload}
                  name="file"
                  types={fileTypes}
                />
              </div>
            </div>
            <hr />
            {loading ? (
              <button className="btn btn-warning my-4 mb-5 btn-w">
                <span
                  className="spinner-border text-light spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button className="btn btn-warning my-4 mb-5 btn-w">
                Tambah Portfolio
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
