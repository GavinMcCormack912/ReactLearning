import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from 'react';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
       const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
          ...prevState,
          selectedProjectId: undefined,
          projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleCancelAddProect() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  console.log(projectsState);
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancelAddProect} onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
        {content}
      </main>
    </>
  );
}

export default App;
