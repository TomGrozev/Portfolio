import { Icons, InlineIcons } from "../components/icons";

export default {
  about: {
    title: "I'm a developer from Australia.",
    description:
      "Developing applications is a never ending journey of learning. Throughout my journey I have worked on projects across many facets of the industry, from mobile app development to complex backend APIs for large scale enterprise projects. I love developing cool new things and I won't be stopping anytime soon.",
  },
  skills: [
    {
      icon: Icons.Backend,
      title: "Backend",
      description:
        "Clients say the hidden functionality in my applications is like magic.",
      lists: [
        {
          heading: "Languages I use",
          type: "icons",
          items: [
            {
              icon: Icons.Elixir,
              title: "Elixir",
            },
            {
              icon: Icons.Phoenix,
              title: "Phoenix",
            },
            {
              icon: Icons.Flask,
              title: "Python Flask",
            },
            {
              icon: Icons.Nodejs,
              title: "Node.JS",
            },
            {
              icon: Icons.Php,
              title: "PHP",
            },
          ],
        },
        {
          heading: "Dev Tools",
          items: [
            "AWS",
            "GitHub",
            "GraphQL",
            "IntelliJ",
            "Jenkins / TeamCity",
            "Jira / YouTrack",
            "Terminal",
            "VMWare",
          ],
        },
      ],
    },
    {
      icon: Icons.Frontend,
      title: "Frontend",
      description: "Seamless and intuitive frontends are my specialty.",
      lists: [
        {
          heading: "Languages I use",
          type: "icons",
          items: [
            {
              icon: Icons.Reactjs,
              title: "ReactJS",
            },
            {
              icon: Icons.Angular,
              title: "Angular",
            },
            {
              icon: Icons.Javascript,
              title: "Javascript",
            },
            {
              icon: Icons.Postcss,
              title: "PostCSS",
            },
            {
              icon: Icons.Sass,
              title: "Sass",
            },
          ],
        },
        {
          heading: "Dev Tools",
          items: [
            "Affinity Designer",
            "Balsamiq Mockups",
            "Bootstrap",
            "Gatsby",
            "GitHub",
            "IntelliJ",
            "TailwindCSS",
            "Terminal",
          ],
        },
      ],
    },
    {
      icon: Icons.Terminal,
      title: "DevOps",
      description:
        "Improve your operational efficiency and stay ahead of the competition.",
      lists: [
        {
          heading: "Tools I use",
          type: "icons",
          items: [
            {
              icon: Icons.Linux,
              title: "Linux",
            },
            {
              icon: Icons.Kubernetes,
              title: "Kubernetes",
            },
            {
              icon: Icons.Aws,
              title: "AWS",
            },
            {
              icon: Icons.Redhat,
              title: "Ansible",
            },
            {
              icon: Icons.Terraform,
              title: "Terraform",
            },
          ],
        },
        {
          heading: "My processes",
          items: [
            "Availability",
            "Data Management",
            "Design and Implementation",
            "Messaging",
            "Management and Monitoring",
            "Performance and Scalability",
            "Resiliency",
            "Security",
          ],
        },
      ],
    },
  ],
  projects: {
    title: "Recent Projects",
    subtitle: "Here are some of my favorite recent projects. Check them out.",
    projects: [
      {
        image: "projects/slingsbytaylor.jpg",
        title: "SlingsbyTaylor Website",
        text:
          "SlingsbyTaylor is a boutique advisory firm headquartered in Adelaide, Australia.",
        tech: [Icons.Sass, Icons.Javascript],
        link: "https://slingsbytaylor.com",
      },
      {
        image: "projects/pretty-good-auth.jpg",
        title: "Pretty Good Auth",
        text:
          "A solution to the complex authentication and authorization required by enterprise applications.",
        tech: [Icons.Elixir, Icons.Phoenix, Icons.Kubernetes],
        indev: true,
      },
      {
        image: "projects/vatpac-core.jpg",
        title: "VATSIM Australia Pacific Core",
        text:
          "A unification of various services into one hyper integrated system for the flight simulation community.",
        tech: [Icons.Nodejs, Icons.Mongodb, Icons.Angular],
      },
      {
        image: "projects/portfolio.png",
        title: "Portfolio",
        text:
          "My personal portfolio website (this one) is designed to showcase me.",
        tech: [Icons.Gatsby, Icons.Reactjs, Icons.Tailwindcss, Icons.Postcss],
      },
      {
        image: "jolt_mate.png",
        title: "Jolt Mate",
        text: "Mobile applications and platforms for job boards and searchers.",
        tech: [Icons.Mongodb, Icons.Angular, Icons.Nodejs, Icons.Swift],
      },
      {
        image: "flask-boom.jpg",
        title: "Flask Boom",
        text: "Powerful project structure generators for flask professionals.",
        tech: [Icons.Python],
        link: "https://github.com/TomGrozev/flask-boom",
      },
    ],
  },
  blog: {
    title: "Latest Blog Posts",
    subtitle: "",
  },
  contact: {
    title: "Inspired. Hassle Free. Value.",
    text: "Got a project we should engage on?",
    button: "Get in touch",
    socials: [
      {
        icon: InlineIcons.Github,
        link: "https://github.com/TomGrozev",
      },
      {
        icon: InlineIcons.Twitter,
        link: "https://twitter.com/TomGrozev",
      },
      {
        icon: InlineIcons.Mail,
        link: "mailto:enquire@tomgrozev.com",
      },
    ],
  },
  form: {
    url: "https://send.pageclip.co/y53vjfHu8EQ4Q4D0aJrrePO8sWLLuYUp/start-a-project",
    title: "Let's get your project off the ground. Let's have a chat"
  },
  footer: {
    text: "Where inspiration and commitment meet.",
  },
};
