import "./styles.css";

const title = "Michelle's Corner";
const message = "Here's some information: ";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Hobbies</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to {title}</h1>
        <p>{message}</p>
    </div>
  );
}

function App() {
    return (
      <div className="App">
        <NavBar />
        <Homepage />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
  
