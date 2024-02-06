import { useState } from "react";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import ProjectContectProvider from "./store/project-context";
import AddProject from "./components/AddForm/AddProject";
import SelectedProject from "./components/Project/SelectedProject";

function App() {
	const [contentValue, setContentValue] = useState("home");

	let content;

	function handleContent(text) {
		setContentValue(text);
	}

	if (contentValue === "home") {
		content = <Home setContent={handleContent} />;
	} else if (contentValue === "addProject") {
		content = <AddProject setContent={handleContent} />;
	} else if (contentValue === "selectedProject") {
		content = <SelectedProject setContent={handleContent}/>;
	}

	return (
		<main className="h-screen flex gap-8">
			<ProjectContectProvider>
				<SideBar setContent={handleContent} />
				{content}
			</ProjectContectProvider>
		</main>
	);
}

export default App;
