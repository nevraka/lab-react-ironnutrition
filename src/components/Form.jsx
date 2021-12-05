const Form = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="calories"
              className="input is-success"
              type="text"
              placeholder="Enter calories"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="image"
              className="input is-success"
              type="text"
              placeholder="Enter image"
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
