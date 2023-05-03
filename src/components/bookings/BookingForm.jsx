import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../../styles/bookingForm.css'

export default function BookingForm({ state, dispatch }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      resDate: "",
      resTime: "",
      guests: "",
      occasion: "",
    },

    onSubmit: () => {
      navigate("/confirmed");
    },

    validationSchema: Yup.object({
      resDate: Yup.string().required("please select a date"),
      resTime: Yup.string().required("please select a time"),
      guests: Yup.number().min(1, "please select a number between 1 and 10")
        .max(10, "please select a number between 1 and 10").required("please select the number of guests"),
      occasion: Yup.string().required("please select an occasion"),
    }),
  });

  return (
    <main id='bookingPage'>
      <h2>Booking Form</h2>
      <form
        style={{display: "grid", maxWidth: "300px", gap: "20px"}}
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" {...formik.getFieldProps("resDate")} />
        {(formik.errors.resDate && formik.touched.resDate) && <span className='errorMs'>{formik.errors.resDate}</span>}
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" {...formik.getFieldProps("resTime")}>
            <option></option>
            {state && state.map(time => (<option key={time}>{time}</option>))}
        </select>
        {(formik.errors.resTime && formik.touched.resTime) && <span className='errorMs'>{formik.errors.resTime}</span>}
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")}/>
        {(formik.errors.guests && formik.touched.guests) && <span className='errorMs'>{formik.errors.guests}</span>}
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...formik.getFieldProps("occasion")}>
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        {(formik.errors.occasion && formik.touched.occasion) && <span className='errorMs'>{formik.errors.occasion}</span>}
        <input type="submit" value="Make Your Reservation" aria-label="submit button"
          disabled={!(formik.values.resDate && formik.values.resTime && formik.values.guests && formik.values.occasion)}
        />
      </form>
    </main>
  )
}
