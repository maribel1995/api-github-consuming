import Home from "routes/home";
import Project from "routes/project";

export default [
  {
    "/": {
      title: "Consuming GitHub API",
      description:
        "Application that consumes the github api to list the projects of an organization and get to see the details of its commits"
    },
    component: Home,
    path: "/"
  },
  {
    "/:slug/:project/:branch": {
      title: "Prohects commits in a specific branch",
      description: "Commit detailed by branch"
    },
    component: Project,
    path: "/:slug/:project/:branch"
    // path: "/project"
  }
];
