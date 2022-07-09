import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {

  const projectData = [
    {
      id: 1,
      title : "Yeah! Meshi",
      type: "money",
      color: "#F2F2F2"
    },
    {
      id: 2,
      title : "DelftWarez",
      type: "fun",
      color: "#D2FF5F"
    },
    {
      id: 3,
      title : "Listening Post",
      type: "fun",
      color: "#82FF5F"
    },
    {
      id: 4,
      title : "HomeFarm",
      type: "money",
      color: "#E0E0E0"
    },
    {
      id: 5,
      title : "BT",
      type: "money",
      color: "#BDBDBD"
    }


  ]

  return (
    <div>
      <Header />
      <Projects data={projectData} />
    </div>
  );
}

export default App;
