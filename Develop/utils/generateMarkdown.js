// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "GPLv3") {
    return (
      "[![GitHub license](https://img.shields.io/badge/license-" +
      license +
      "-red.svg)]"
    );
  } else if (license == "GPLv2") {
    return (
      "[![GitHub license](https://img.shields.io/badge/license-" +
      license +
      "-red.svg)]"
    );
  } else if (license == "MIT") {
    return (
      "[![GitHub license](https://img.shields.io/badge/license-" +
      license +
      "-yellow.svg)]"
    );
  } else if (license == "APACHE 2.0") {
    return (
      "[![GitHub license](https://img.shields.io/badge/license-" +
      license +
      "-blue.svg)]"
    );
  } else if (license == '"BSD 2-Clause') {
    return (
      "[![GitHub license](https://img.shields.io/badge/license-" +
      license +
      "-orange.svg)]"
    );
  } else if (license == '"BSD 3-Clause') {
    return (
      "[![GitHub license](https://img.shields.io/badge/license-" +
      license +
      "-orange.svg)]"
    );
  } else if (license == "IPL") {
    return (
      "[![GitHub license](https://img.shields.io/badge/license-" +
      license +
      "-brightgreen.svg)]"
    );
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "GPLv3") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "GPLv2") {
    return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license == "APACHE 2.0") {
    return "(https://opensource.org/licenses/Artistic-2.0)";
  } else if (license == '"BSD 2-Clause') {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license == '"BSD 3-Clause') {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license == "IPL") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else {
    return " ";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "Other" || license !== "None") {
    return "This appliction is covered under " + license + " license";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}


  ## Description
  ${data.desc}

  ## Table of content

  1.) [Installation](#installation)

  2.) [Usage](#usage)

  3.) [Contribution guidelines](#contribution)

  4.) [License](#license)
  
  5.) [Test](#test)

  6.) [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contri}

  ## Test
  ${data.test}

  ## Questions
  
  Repo Link : https://github.com/${data.username}/
  
  Email :     ${data.email}
`;
}

module.exports = generateMarkdown;
