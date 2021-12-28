const Header = (props) => {
  const { handleSubmitState, handleInputSelectedState } = props;

  return (
    <header className="main-header">
      <section className="select-state-section">
        <h2>Welcome to Brewery Tours</h2>
        <form id="select-state-form" autoComplete="nope" onSubmit={handleSubmitState}>
          <label htmlFor="select-state">Which state are you visiting?</label>
          <input
            id="select-state"
            name="select-state"
            type="text"
            onChange={handleInputSelectedState}
          />
        </form>
      </section>
    </header>
  );
}

export default Header;