import { Icons, InlineIcons } from "../components/icons"

export default {
  about: {
    title: "I'm a developer from Australia.",
    description:
      "Developing applications is a never ending journey of learning. Throughout my journey I have worked on projects across many facists of the industry, from mobile app development to complex backend APIs for large scale enterprise projects. I love developing cool new things and I won't be stopping anytime soon.",
  },
  skills: [
    {
      icon: Icons.Backend,
      title: "Backend",
      description:
        "I make the hidden functionality in applications seem like magic.",
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
      description:
        "I bring ideas to life for of the user in their browser",
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
        "I bring applications and services into the high performance cloud.",
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
              icon: Icons.Kubernets,
              title: "Kubernets",
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
          "A solution to the complex authorization and authentication required by enterprise applications.",
        tech: [Icons.Elixir, Icons.Phoenix, Icons.Kubernets],
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
        text: "A mobile application for sending jobs to people you trust.",
        tech: [Icons.Mongodb, Icons.Angular, Icons.Nodejs, Icons.Swift],
      },
      {
        image: "flask-boom.jpg",
        title: "Flask Boom",
        text: "A simple project structure generator made for flask projects.",
        tech: [Icons.Python],
        link: "https://github.com/TomGrozev/flask-boom",
      }
    ],
  },
  contact: {
    socials: [
      {
        icon: InlineIcons.Github,
        link: "https://github.com/TomGrozev",
      },
      {
        icon: InlineIcons.Twitter,
        link: "",
      },
      {
        icon: InlineIcons.Linkedin,
        link: "",
      },
      {
        icon: InlineIcons.Mail,
        link: "mailto:enquire@tomgrozev.com",
      },
    ],
  },
}
