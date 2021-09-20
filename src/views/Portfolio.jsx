import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
//import axios from "axios";
const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [gerror, setError] = useState(false);
  const [content, setContent] = useState([]);
  const getMyWork = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setError(false);
          setContent(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setError(err.toString());
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMyWork();
  }, []);

  return (
    <>
      <div className="portfolio py-5">
        <div className="container">
          <h1 className="text-center mb-3">Portfolio</h1>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="row">
                {gerror ? (
                  <Error errorText={gerror} />
                ) : (
                  <>
                    {content.map((currentElem, index) => {
                      const { name, email, address } = currentElem;
                      return (
                        <div key={index} className="col-md-3 col-12 my-2">
                          <div className="card shadow-sm border">
                            <div
                              style={{ textAlign: "left" }}
                              className="text-left card-header bg-white "
                            >
                              {name}
                            </div>
                            <div className="card-body text-center">
                              {email} / {address.geo.lat}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
