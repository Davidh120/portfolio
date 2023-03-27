import Work1 from '../../assets/img/h3lix2.jpg'
import Work2 from '../../assets/img/portfolio.png'
import Work3 from '../../assets/img/costApp.png'
import Work4 from '../../assets/img/todo.png'

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "H3LIX Page",
    description: "Creating a webpage for an artist. Page not available yet.",
    page: false,
    demo: "#",
    code: "#"
  },
  {
    id: 2,
    image: Work2,
    title: "Portfolio",
    description: "David Heredia Portfolio: React.js, SwiperJs, EmailJs",
    page: true,
    demo: "/",
    code: "https://github.com/Davidh120/Portfolio"
  },
  {
    id: 3,
    image: Work3,
    title: "Cost Management App",
    description: "Expense tracker web app: Vue.js, Firebase Auth, Cloud Firestore.",
    page: true,
    demo: "https://davidh120.github.io/cost-management-app/",
    code: "https://github.com/Davidh120/cost-management-app"
  },
  {
    id: 4,
    image: Work4,
    title: "Todo App",
    description: "Task list web app: Vue.js, local storage.",
    page: true,
    demo: "https://davidh120.github.io/todo-app/",
    code: "https://github.com/Davidh120/todo-app"
  },
];
