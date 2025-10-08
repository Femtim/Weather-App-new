function SearchBar() {
  return (
    <div>
        <h1 style={{ fontSize: '35px', marginBottom: '30px' }}>How's the sky looking today?</h1>
      <input type="text" placeholder="Search weather..." style={{ padding: '9px 150px', borderRadius: '5px', border: 'none', marginRight: '10px',backgroundColor: '#323c46ff', color: 'white' }} />
      <button style={{ padding: '7px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: 'white' }}>Search</button>
    </div>
  );
}
export default SearchBar;
