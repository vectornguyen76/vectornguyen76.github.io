async function loadProjects() {
  try {
    const response = await fetch("/assets/data/projects.json");
    return await response.json();
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

async function displayProjects() {
  const projects = await loadProjects();
  const container = document.getElementById("projectsContainer");

  projects.forEach((project) => {
    const classes = ["project-card"];
    if (project.featured) classes.push("featured");
    if (project.mlops) classes.push("mlops");

    const demoLink = project.demo
      ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>`
      : "";

    const card = document.createElement("div");
    card.className = classes.join(" ");
    card.innerHTML = `
      <div class="project-image col-sm-3">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="project-details col-sm-9">
        <div style="display: flex; align-items: baseline; gap: 0.6rem; flex-wrap: wrap;">
          <h5 style="margin: 0;">
            <a href="${project.github}" target="_blank">${project.title}</a>
          </h5>
          ${
            project.date
              ? `<span style="font-size: 0.85rem; color: #888; font-style: italic;">${project.date}</span>`
              : ""
          }
        </div>
        <div class="project-description">${project.description.join(
          "<br>"
        )}</div>
        <div class="project-links">
          <a href="${
            project.github
          }" target="_blank"><i class="fab fa-github"></i> Code</a>
          ${demoLink}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
