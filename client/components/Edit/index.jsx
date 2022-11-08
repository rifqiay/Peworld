import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import defaultPhoto from "../../public/default-photo.jpg";
import edit from "../../public/edit.svg";
import location from "../../public/location.svg";

const EditProfile = ({ id }) => {
  const [data, setData] = useState([]);
  const [saveImage, setSaveImage] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [form, setForm] = useState({
    nama: "",
    job_desc: "",
    domisili: "",
    tempat_kerja: "",
    deskripsi_singkat: "",
    photo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dataPribadiSubmit = (e) => {
    const formData = new FormData();
    setLoading(true);
    formData.append("nama", form.nama);
    formData.append("job_desc", form.job_desc);
    formData.append("domisili", form.domisili);
    formData.append("tempat_kerja", form.tempat_kerja);
    formData.append("deskripsi_singkat", form.deskripsi_singkat);
    formData.append("photo", saveImage);
    e.preventDefault();
    axios
      .put(process.env.NEXT_PUBLIC_API + "/worker/" + id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setLoading(false);
        Swal.fire({
          text: res.data.message,
          icon: "success",
        });
        getWorker();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWorker = () => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/worker/" + id)
      .then((res) => {
        setData(res.data.data[0]);
        setForm(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWorker();
  }, []);
  return (
    <>
      <style jsx>{`
        .btn-w {
          width: 100%;
        }
      `}</style>
      <div className="col-lg-4 offset-lg-1">
        <div className="card p-lg-3 px-3 py-lg-3">
          <div className="col-lg-12 mt-3 d-flex justify-content-center test">
            <div className="col-lg-4">
              {!data.photo ? (
                <Image
                  src={defaultPhoto}
                  width="100px"
                  height="100px"
                  alt="avatar"
                  style={{ borderRadius: "15px" }}
                />
              ) : (
                <Image
                  src={data.photo}
                  width="100px"
                  height="100px"
                  alt="avatar"
                  style={{ borderRadius: "15px" }}
                />
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Image src={edit} alt="edit" />
            <input
              type="file"
              name="photo"
              onChange={handleUpload}
              id="formFile"
              style={{ display: "none" }}
            />
            <label htmlFor="formFile">
              <h4 className="ms-2 text-secondary">Edit</h4>
            </label>
          </div>
          <h5>{data.nama}</h5>
          <h6>Web developer</h6>
          <div className="d-flex">
            <Image src={location} alt="location" />
            <span className="ms-2">{data.domisili}</span>
          </div>
          <strong className="mb-3">{data.job_desc}</strong>
        </div>
        <Link href={`/home/${id}`}>
          <button className="btn btn-warning btn-w mt-4">Detail</button>
        </Link>
        {loading ? (
          <button className="btn btn-primary btn-w mt-4">
            <span
              className="spinner-border text-light spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          </button>
        ) : (
          <button
            className="btn btn-primary btn-w mt-4"
            onClick={dataPribadiSubmit}
          >
            Simpan
          </button>
        )}
        <button className="btn btn-light btn-outline-primary btn-w mt-4">
          Batal
        </button>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="card">
          <h4 className="ms-4 mt-4">Data diri</h4>
          <hr />
          <form onSubmit={dataPribadiSubmit}>
            <div className="container">
              <div className="mb-3 mx-4">
                <label htmlFor="name">Nama lengkap</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Masukan nama lengkap"
                  id="name"
                  name="nama"
                  // defaultValue={data.nama}
                  value={form.nama}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mx-4">
                <label htmlFor="job">Job desk</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Masukan job desk"
                  id="job"
                  name="job_desc"
                  // defaultValue={data.job_desc}
                  value={form.job_desc}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mx-4">
                <label htmlFor="domisili">Domisili</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Masukan domisilis"
                  id="domisili"
                  name="domisili"
                  // defaultValue={data.domisili}
                  value={form.domisili}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mx-4">
                <label htmlFor="tempat-kerja">Tempat kerja</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Masukan tempat kerja"
                  id="tempat-kerja"
                  name="tempat_kerja"
                  // defaultValue={data.tempat_kerja}
                  value={form.tempat_kerja}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 mx-4">
                <label htmlFor="deskripsi">Deskripsi singkat</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Tulis deskripsi singkat"
                  id="deskripsi"
                  name="deskripsi_singkat"
                  // defaultValue={data.deskripsi_singkat}
                  value={form.deskripsi_singkat}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
