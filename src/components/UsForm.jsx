import React from "react";
import { useFormik } from "formik";
import UserSchema from "./UserSchema";
import axios from "axios";
import Swal from "sweetalert2";

function UsForm() {
  const initialValues = {
    fname: "",
    lname: "",
    roll: "",
    email: "",
    dob: "",
    gender: "",
    phone: "",
    stream: "",
    year: "",
    domains: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UserSchema,
      onSubmit: (values, action) => {
        console.log(values);
        alert("jai shree ram");
        action.resetForm();
      },
    });
  console.log(values);
  const recordres = async () => {
    axios({
      method: "POST",
      url: "https://quizinc.onrender.com/api/auth/register",
      data: values,
    })
      .then(function (res) {
        console.log(res);
        if (res.data.status) {
          Swal.fire({
            icon: "success",
            title: "Submitted...",
            text: "Your response have been submitted successfully",
            footer: '<a href="/">know about us?</a>',
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.data.msg,
            footer: '<a href="/">know about us?</a>',
          });
        }
      })
      .catch(function (res) {
        console.log(res);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="/">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div class="container mt-3">
      <form onSubmit={handleSubmit}>
        <div class="row jumbotron box8">
          <div class="col-sm-12 mx-t3 mb-4">
            <h2 class="text-center text-info">Registration</h2>
          </div>
          <div class="col-sm-6 form-group mb-3">
            <label for="name-f">First Name</label>
            <input
              type="text"
              class="form-control"
              name="fname"
              id="name-f"
              placeholder="Enter your first name."
              required
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fname && touched.fname ? (
              <p className="form-error .text-danger">{errors.fname}</p>
            ) : null}
          </div>
          <div class="col-sm-6 form-group mb-3">
            <label for="name-l">Last name</label>
            <input
              type="text"
              class="form-control"
              name="lname"
              id="name-l"
              placeholder="Enter your last name."
              required
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lname && touched.lname ? (
              <p className="form-error">{errors.lname}</p>
            ) : null}
          </div>
          <div class="col-sm-6 form-group mb-3">
            <label for="name-l">ROLL NO</label>
            <input
              type="text"
              class="form-control"
              name="roll"
              id="name-l"
              placeholder="Enter your Roll No."
              required
              value={values.roll}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.roll && touched.roll ? (
              <p className="form-error">{errors.roll}</p>
            ) : null}
          </div>
          <div class="col-sm-6 form-group mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Enter your email."
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div class="col-sm-6 form-group mb-3">
            <label for="Date">Date Of Birth</label>
            <input
              type="Date"
              name="dob"
              class="form-control"
              id="Date"
              placeholder=""
              required
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dob && touched.dob ? (
              <p className="form-error">{errors.dob}</p>
            ) : null}
          </div>
          <div class="col-sm-6 form-group mb-3">
            <label for="sex">Gender</label>
            <select
              id="sex"
              class="form-control browser-default custom-select"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {errors.gender && touched.gender ? (
                <p className="form-error">{errors.gender}</p>
              ) : null}
              <option name="gender" value="male">
                Male
              </option>
              <option name="gender" value="female">
                Female
              </option>
              <option name="gender" value="unspesified">
                Unspecified
              </option>
            </select>
          </div>
          <div class="col-sm-2 form-group mb-3">
            <label for="cod">Country code</label>
            <select class="form-control browser-default custom-select">
              <option data-countryCode="US" value="1" selected>
                INDIA (+91)
              </option>
            </select>
          </div>
          <div class="col-sm-4 form-group mb-3">
            <label for="tel">Phone</label>
            <input
              type="tel"
              name="phone"
              class="form-control"
              id="tel"
              placeholder="Enter Your Contact Number."
              required
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <p className="form-error">{errors.phone}</p>
            ) : null}
          </div>
          <div class="col-sm-4 form-group mb-3">
            <label for="cod">Stream</label>
            <select
              class="form-control browser-default custom-select"
              name="stream"
              value={values.stream}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="CSE" selected>
                CSE
              </option>
              <option value="EE">EE</option>
              <option value="ECE">ECE</option>
              <option value="CH">CH</option>
              <option value="ME">ME</option>
              <option value="MM">MM</option>
              <option value="BT">BT</option>
            </select>
          </div>
          <div class="col-sm-6 form-group mb-3 ml-2">
            <label for="tel" class="mb-1">
              Year
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="year"
                id="flexRadioDefault1"
                checked
                value={values.year}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                1st Year
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="year"
                id="flexRadioDefault2"
                value={values.year}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                2nd Year
              </label>
            </div>
          </div>

          <div class="col-sm-6 form-group mb-3">
            <label for="tel" class="mb-1">
              Domains Interested
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Web Development
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Graphic Designing
              </label>
            </div>
          </div>

          <div class="col-sm-12 mb-3">
            <input
              type="checkbox"
              class="form-check d-inline"
              id="chb"
              required
            />
            <label for="chb" class="form-check-label">
              &nbsp;I accept all terms and conditions.
            </label>
          </div>

          <div class="col-sm-12 form-group mb-3">
            <button class="btn btn-primary float-right" onClick={recordres}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UsForm;
