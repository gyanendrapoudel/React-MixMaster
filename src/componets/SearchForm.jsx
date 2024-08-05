import { Form, useNavigation } from "react-router-dom"

const SearchForm = ({str}) => {
   const navigation = useNavigation()
  
   const isSubmitting = navigation.state === 'submitting'
    console.log(isSubmitting, navigation.state)
  return (
    <Form className="input-group search-form my-5 shadow-lg m-auto ">
      <input
        type="search"
        className="form-control"
        name="search"
        defaultValue={str}
      />
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'searching' : 'search'}
      </button>
    </Form>
  )
}
export default SearchForm