//import style Here
import { useDispatch, useSelector } from "react-redux";
import style from "./contact.module.css";
import {
  addMassege,
  toggleShowMassege,
} from "../../../services/massage/actions/actions";
import { useState } from "react";
export default function Contact() {
  const { name, email, massege, showMassege } = useSelector((state) => {
    return state.massegeReducer;
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    massege: "",
  });
  const dispatch = useDispatch();
  const handelChange = (e) => {
    if (e.target.name === "name") {
      setFormData({
        ...formData,
        name: e.target.value,
      });
    } else if (e.target.name === "email") {
      setFormData({
        ...formData,
        email: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        massege: e.target.value,
      });
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addMassege(formData));
    setFormData({ name: "", email: "", massege: "" });
  };

  const handelClick = () => {
    dispatch(toggleShowMassege());
  };
  return (
    <>
      <section className={style.contactSection}>
        <div className={style.containeer}>
          <h2 className={style.sectionTitle}>Contact Form</h2>
          <form onSubmit={handelSubmit} className={style.form}>
            <div className={style.content}>
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handelChange}
              />
            </div>
            <div className={style.content}>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                onChange={handelChange}
                value={formData.email}
                placeholder="Enter Your Email"
              />
            </div>
            <div className={style.textareaContent}>
              <label htmlFor="massege">Massage : </label>
              <textarea
                name="massege"
                id="massege"
                value={formData.massege}
                onChange={handelChange}
                placeholder="Enter Your Massege Here"
              ></textarea>
            </div>
            <div className={style.btnSection}>
              <button type="submit" className={style.btn}>
                Submit
              </button>
              <button type="reset" className={style.btn}>
                Reset
              </button>
            </div>
          </form>
          <button onClick={handelClick} className={style.btn}>
            {showMassege ? "Close Massege" : "Show Massege"}
          </button>
        </div>
        {showMassege && (
          <div className={style.showMassegeSection}>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Massege : {massege}</p>
          </div>
        )}
      </section>
    </>
  );
}
