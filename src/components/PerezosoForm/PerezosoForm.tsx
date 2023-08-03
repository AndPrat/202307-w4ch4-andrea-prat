const PerezosoForm = (): React.ReactElement => {
  return (
    <form action="">
      <label htmlFor="name">Perezoso name:</label>
      <input type="text" id="name" />
      <label htmlFor="url">Url Perezoso picture:</label>
      <input type="text" id="url" />
      <label htmlFor="fingers">Number of fingers:</label>
      <input type="number" id="fingers" />
      <button>Create a Perezoso!</button>
    </form>
  );
};

export default PerezosoForm;
