import PrimaryMenu from "../components/primary-menu"

export default function NewPage() {
  function submitHandler(event) {
      event.preventDefault()

      const form = event.target;

      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData.entries());

      const fetchOptions ={
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataObject)
      }

      console.log(formDataObject);

      const response = fetch('/api/blogpost/new', fetchOptions)
  }

return (
  <>
  <PrimaryMenu />
  <h1>Make Post</h1>
  <form onSubmit={submitHandler}>
      <input type="text" name="title" placeholder="Title..." />
      <input type="date" name="published" placeholder="published..." />
      <textarea name="text" placeholder="Start Writing...">
  
      </textarea>

      <input type="submit" value="Send"/>
  </form>
  </>
)
}
