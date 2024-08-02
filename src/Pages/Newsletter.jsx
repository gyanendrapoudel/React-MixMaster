import axios from "axios"
import { Form, redirect } from "react-router-dom"
import { toast } from "react-toastify"

const newsletterUrl = 'http://localhost:9000/api/newsletter'
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const response = await axios.post(newsletterUrl,data)
  console.log(response)
  toast.success(response.data.msg)
  return redirect("/")
}

const Newsletter = () => {
  return (
    
      <Form style={{ marginTop: '4rem', padding: '0 2rem' }} method="POST">
        <div className="text-center fs-5">Our Newsletter</div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            defaultValue={'gyan'}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            defaultValue={'poudel'}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            defaultValue={'test@gmail.com'}
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </Form>
    
  )
}
export default Newsletter
