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
  const mainContainer = d3.select("#projectsContainer");

  // Create project cards
  const projectCards = mainContainer
    .selectAll("div.project-card")
    .data(projects)
    .enter()
    .append("div")
    .attr(
      "class",
      (d) =>
        `project-card${d.featured ? " featured" : ""}${d.mlops ? " mlops" : ""}`
    );

  // Add project images
  const imageDiv = projectCards
    .append("div")
    .attr("class", "project-image col-sm-3");

  imageDiv
    .append("img")
    .attr("src", (d) => d.image)
    .attr("alt", (d) => d.title);

  // Add project details
  const detailsDiv = projectCards
    .append("div")
    .attr("class", "project-details col-sm-9");

  detailsDiv
    .append("h5")
    .append("a")
    .attr("href", (d) => d.github)
    .attr("target", "_blank")
    .text((d) => d.title);

  // Create description div
  const descriptionDiv = detailsDiv
    .append("div")
    .attr("class", "project-description")
    .html((d) => d.description.join("<br>"));

  // Add project links
  const linksDiv = detailsDiv.append("div").attr("class", "project-links");

  linksDiv
    .append("a")
    .attr("href", (d) => d.github)
    .attr("target", "_blank")
    .html('<i class="fab fa-github"></i> Code');

  // Add demo link if available
  linksDiv.each(function (d) {
    if (d.demo) {
      d3.select(this)
        .append("a")
        .attr("href", d.demo)
        .attr("target", "_blank")
        .html('<i class="fas fa-external-link-alt"></i> Demo');
    }
  });
}
