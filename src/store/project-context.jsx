import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
	projects: [],
	selectedProject: {},
	handleAddProject: () => {},
	selectProject: () => {},
	removeProject: () => {},
});

const projectReducer = (state, action) => {
	if (action.type === "ADD_PROJECT") {
		const updatedProjectList = [...state.projects];

		updatedProjectList.push(action.payload);

		return {
			...state,
			projects: updatedProjectList,
		};
	}

	if (action.type === "SELECT_PROJECT") {
		const updatedProjectList = [...state.projects];

		const currentProject = updatedProjectList.find((project) => {
			return project.id === action.payload;
		});

		return {
			...state,
			selectedProject: currentProject,
		};
	}

	if (action.type === "REMOVE_PROJECT") {
		const updatedProjectList = [...state.projects];

		const currentIndex = updatedProjectList.indexOf(action.payload);

		updatedProjectList.splice(currentIndex, 1);

		return {
			...state,
			projects: updatedProjectList,
			selectedProject: updatedProjectList[0]
		};
	}

	console.log(state);
	return state;
};

export default function ProjectContectProvider({ children }) {
	const [projectState, projectDispatch] = useReducer(projectReducer, {
		projects: [],
		selectedProject: undefined,
	});

	const handleAddProject = (newProject) => {
		projectDispatch({
			type: "ADD_PROJECT",
			payload: newProject,
		});
	};

	const selectProject = (id) => {
		projectDispatch({
			type: "SELECT_PROJECT",
			payload: id,
		});
	};

	const removeProject = (project) => {
		projectDispatch({
			type: "REMOVE_PROJECT",
			payload: project,
		});
	};

	const contextValue = {
		projects: projectState.projects,
		selectedProject: projectState.selectedProject,
		handleAddProject: handleAddProject,
		selectProject: selectProject,
		removeProject: removeProject,
	};

	return <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>;
}
