const Form = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              name="name"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Calories</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="calories"
              class="input is-success"
              type="text"
              placeholder="Enter calories"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Image</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="image"
              class="input is-success"
              type="text"
              placeholder="Enter image"
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
