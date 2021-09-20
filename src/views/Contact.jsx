import React, { useState } from "react";
import ContactImg from "../assets/images/contact.jpg";
import { Signpost } from "bootstrap-icons-react";
import axios from "axios";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [inputval, setInputval] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [alertStat, setalertStat] = useState({
    stat: false,
    message: "",
    type: "",
  });

  const changeInput = (ev) => {
    const ivalue = ev.target.value;
    const iname = ev.target.name;
    setInputval({
      ...inputval,
      [iname]: ivalue,
    });
  };
  const Alert = () => {
    return (
      <div className={`alert alert-${alertStat.type}`} role="alert">
        {alertStat.message}
      </div>
    );
  };
  const submitform = (e) => {
    setLoading(true);
    /*Form Submit*/
    e.preventDefault();
    if (
      inputval.fullname === "" ||
      inputval.email === "" ||
      inputval.message === ""
    ) {
      setalertStat({
        ...alertStat,
        stat: true,
        type: "danger",
        message: "Please Fillup Form Properly",
      });
      setLoading(false);
    } else {
      const formData = new FormData();
      formData.append("fullname", inputval.fullname);
      formData.append("email", inputval.email);
      formData.append("message", inputval.message);
      //axios call
      const sendReq = async () => {
        try {
          await axios
            .post("http://192.168.0.155/react_back_end/", formData)
            .then((rdata) => {
              setLoading(false);
              if (rdata.data.status === "success") {
                //input field rest
                setInputval({
                  ...inputval,
                  fullname: "",
                  email: "",
                  message: "",
                });
                setalertStat({
                  ...alertStat,
                  stat: true,
                  type: "success",
                  message: rdata.data.msg,
                });
              } else {
                setalertStat({
                  ...alertStat,
                  stat: true,
                  type: "danger",
                  message: "Something wrong",
                });
              }
            })
            .catch((err) => {
              setLoading(false);
              setalertStat({
                ...alertStat,
                stat: true,
                type: "danger",
                message: err.toString(),
              });
            });
        } catch (error) {
          setalertStat({
            ...alertStat,
            stat: true,
            type: "danger",
            message: error.toString(),
          });
        }
      };

      sendReq();
    }
  };
  return (
    <>
      <div className="contact py-5">
        <div className="container">
          <h1 className="text-center mb-3">
            <Signpost /> Contact
          </h1>
          <div className="row">
            <div className="col-md-5 order-lg-1 order-2">
              <img src={ContactImg} alt="img" className="img-fluid" />
            </div>
            <div className="col-md-7 pt-5 ps-2 ps-md-4 order-lg-2 order-1">
              <h5 className="text-muted">Feel free to message us</h5>
              <hr />
              <form onSubmit={submitform} id="myform">
                {alertStat.stat ? <Alert height={40} width={40} /> : ""}
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    required="required"
                    name="fullname"
                    type="text"
                    className="form-control"
                    onChange={changeInput}
                    value={inputval.fullname}
                    id="fullname"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    required="required"
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={changeInput}
                    value={inputval.email}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <input
                    required="required"
                    name="message"
                    type="text"
                    className="form-control"
                    onChange={changeInput}
                    value={inputval.message}
                    id="message"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading ? true : false}
                >
                  {loading ? "PLease Wait..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
