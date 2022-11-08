import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from "axios";

const ShowPengalaman = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/experience/" + id)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <div className="container my-5">
        <h2 className="ms-4 ">Pengalaman Kerja</h2>
        <div className="row">
          {data.map((e, i) => (
            <div className="col-lg-6 col-md-6 col-12 mt-3 " key={i}>
              <div className="card p-3">
                <h3>{e.posisi}</h3>
                <h4 className="text-secondary">{e.nama_perusahaan}</h4>
                <h5 className="text-secondary">{e.bulan_tahun}</h5>
                <p>{e.deskripsi_singkat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowPengalaman;
