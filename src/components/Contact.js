const Contact = () => {
  return (
    <div className="p-4 text-2xl">
      <h1>Contact us:</h1>
      <div className="flex flex-col">
        <input
          className="p-2 border border-b-cyan-700 rounded-xl mb-2 mt-2"
          type="text"
          placeholder="Name"
        />
        <textarea
          className="p-2 border border-b-cyan-700 rounded-xl mb-2"
          row="3"
          placeholder="Message"
        />
        <button className="p-2 cursor-pointer border border-b-cyan-700 rounded-xl mb-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
