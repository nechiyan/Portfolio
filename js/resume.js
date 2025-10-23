const resumeData = [
    {
      date: "2024 to Present",
      title: "Developer Analyst At ULTS",
      location: "Trivandrum, Kerala",
      description:
        "Engineered e-Government software solutions to improve operational efficiency through automation. Architected a secure document management system, reducing retrieval time and manual errors.",
      linkText: "sofiyersolutions.com",
    },
    {
        date: "2022 to 2023",
        title: "Software Engineer At Steyp",
        location: "Kochin, Kerala",
        description:
        "Steyp is building a Digital University for students to learn and become Engineers and Future Scientists.",
        link: "https://steyp.com/",
        linkText: "Steyp.com",
    },
    {
      date: "2023 to 2024",
      title: "Senior Software Engineer At Sofiyer",
      location: "Pattambi, Kerala",
      description:
        "Sofiyer Software Solutions is a software company in Kerala, India. As a custom software development company.",
      link: "https://www.sofiyersolutions.com/",
      linkText: "sofiyersolutions.com",
    },
    {
        date: "2017 to 2021",
        title: "B.Tech in Computer Science Engineering",
        location: "KTU",
        description:
        "Strong-willed and avid engineering graduate who has a profound passion for learning new skills and achieving expertise.",
    },
  {
    date: "2021 Sep to March",
    title: "Software Intern At Steyp",
    location: "Kochin, Kerala",
    description:
      "Startup from TALROP building a strong startup ecosystem in Kerala.",
    link: "https://talrop.com/",
    linkText: "Talrop.com",
  },
];

// Split data into two columns (3 + 3)
const leftColumn = resumeData.slice(0, 2);
const rightColumn = resumeData.slice(2, 4);

const renderItem = (item) => `
  <div class="resume-wrap ftco-animate">
    <span class="date">${item.date}</span>
    <h2>${item.title}</h2>
    <span class="position">${item.location}</span>
    <p class="mt-4">${item.description}</p>
    ${
      item.link
        ? `<a href="${item.link}" target="_blank">${item.linkText}</a>`
        : ""
    }
  </div>
`;

const resumeContainer = document.getElementById("resume-container");

resumeContainer.innerHTML = `
  <div class="col-md-6">
    ${leftColumn.map(renderItem).join("")}
  </div>
  <div class="col-md-6">
    ${rightColumn.map(renderItem).join("")}
  </div>
`;
