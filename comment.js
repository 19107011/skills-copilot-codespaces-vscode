// Function to generate a markdown list of skills from topics array
function generateMarkdownList(topics) {
    const skillsList = topics.map(topic => `- ${topic}`).join('\n');
    return `# Skills\n\n${skillsList}`;
}