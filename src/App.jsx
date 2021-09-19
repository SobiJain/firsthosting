
function App() {
  function auth() {
    // window.location.href = "https://api.thecodemesh.online/api/v1/enable/enable-user-workflow/6146b9a4c0dc290012eb4d05/" + window.location.search;
    window.location.href = 'https://api.thecodemesh.online/api/v1/enable/enable-user-workflow/6146b9a4c0dc290012eb4d05/'+window.location.search;
  }
  return (
    <div>
      <h1>Sync your customers</h1>
      <button id="myButton" className="float-left submit-button" onClick={auth}>Enable Workflow</button>
    </div>
  );
}

export default App;
