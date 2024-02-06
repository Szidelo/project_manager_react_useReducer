import { useRef, useContext } from "react";
import { ProjectContext } from "../../store/project-context";

import Input from "./Input";

const AddProject = ({setContent}) => {
	const title = useRef();
	const desc = useRef();
    const dueDate = useRef()

	const { handleAddProject } = useContext(ProjectContext);

	const handleSave = () => {
		const enteredTitle = title.current.value;
		const enteredDesc = desc.current.value;
        const enteredDate = dueDate.current.value

		const newProject = {
			id: Math.random(),
			title: enteredTitle,
			description: enteredDesc,
            dueDate: enteredDate,
			tasks: [],
		};

		handleAddProject(newProject);
        setContent('home')
	};

	return (
		<div className="flex flex-col items-center justify-center w-[32rem] mx-auto">
			<div className="w-[32rem]">
				<Input label="Title" type="text" ref={title} />
				<Input label="Description" textarea ref={desc} />
                <Input label="Due date" type="date" ref={dueDate} />
			</div>
			<menu className="flex items-end justify-end gap-4 ms-auto">
				<li>
					<button onClick={() => setContent('home')} className="px-6 py-2 text-stone-800 hover:text-red-700">Cancel</button>
				</li>
				<li>
					<button
						onClick={handleSave}
						className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
						Save
					</button>
				</li>
			</menu>
		</div>
	);
};

export default AddProject;
