import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Skill = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [skill, setSkill] = useState({
    nama_skill: "",
    id_worker: id,
  });

  const handleSkill = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const skillSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API + "/skills/create", skill)
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
        .btn-w {
          width: 100px;
        }
      `}</style>
      <div className="card">
        <h4 className="ms-4 mt-4">Skill</h4>
        <hr />
        <div className="container">
          <div className="mb-3 ">
            <form onSubmit={skillSubmit}>
              <div className="d-flex gap-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Masukan skill"
                  name="nama_skill"
                  onChange={handleSkill}
                />
                {loading ? (
                  <div className="d-flex align-items-center">
                    <button className="btn btn-warning btn-w">
                      <span
                        className="spinner-border text-light spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-warning btn-w">
                      Simpan
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
