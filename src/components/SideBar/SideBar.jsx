import "./sidebar.css";
import Button from "../Buttons/Button";
import { ProjectContext } from "../../store/project-context";
import { useContext } from "react";

const SideBar = ({ setContent }) => {
	const { projects, selectProject } = useContext(ProjectContext);

	const handleSelectProject = (projectId) => {
		selectProject(projectId)
		setContent('selectedProject')
	}

	return (
		<aside className="px-8 py-16 bg-stone-900 text-stone-50 mb:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<div className="flex flex-col pe-32 gap-4">
				<Button onClick={() => setContent("home")}>home</Button>
				<Button onClick={() => setContent("addProject")}>+ add project</Button>
			</div>
			<ul className="mt-8">
				{projects.map((project, index) => (
					<li className="flex" key={project.id}>
                        
						<button onClick={() => handleSelectProject(project.id)} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
							{index + 1}. {project.title}
						</button>
	
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SideBar;
