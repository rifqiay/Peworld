import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ShowPortfolio = ({ id }) => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/portfolio/" + id)
      .then((res) => {
        const data = res.data.data;
        setPortfolio(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <h2 className="ms-4 ">Portfolio</h2>
      {portfolio.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-4 col-6 mt-3">
          <div className="card p-2">
            <div className="d-flex justify-content-center">
              <Image
                src={item.photo}
                alt="Picture of the author"
                width={150}
                height={150}
                layout="intrinsic"
              />
            </div>
            <p className="lg-text-center mt-2">{item.nama_app}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowPortfolio;
