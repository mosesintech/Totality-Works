import React from 'react'
import { Formik } from 'formik'

const ContactForm = () => {
    return (
    <Formik
       initialValues={{ name: '', email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         }
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.message) {
           errors.message = 'Required';
         }
         return errors;
       }}
       
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
       }) => (
           <>
         <form action="https://send.pageclip.co/aZ4JXAeO0ZIUPzLyFu3QqdDT9SFFI949" method="post">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="text-dark" htmlFor="inputName">Full name</label>
                    <input class="form-control py-4" id="inputName" name='name' type="text" placeholder="Full name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                    {errors.name && touched.name && errors.name}
                </div>
                <div class="form-group col-md-6">
                    <label class="text-dark" htmlFor="inputEmail">Email</label>
                    <input class="form-control py-4" id="inputEmail" type="email"              name="email" onChange={handleChange} onBlur={handleBlur} placeholder="name@example.com" value={values.email} />
                    {errors.email && touched.email && errors.email}
                </div>
            </div>
            <div class="form-group">
                <label class="text-dark" htmlFor="inputMessage">Message</label>
                <textarea class="form-control py-3" id="inputMessage" type="text" name='message' onChange={handleChange} onBlur={handleBlur} value={values.message} placeholder="Enter your message..." rows="4"></textarea>
                {errors.message && touched.message && errors.message}
            </div>
            <div class="text-center">
                <button class="btn btn-primary btn-marketing mt-4" type="submit">Submit Request</button>
            </div>
        </form>
        </>
       )}
     </Formik>
    )
}

export default ContactForm