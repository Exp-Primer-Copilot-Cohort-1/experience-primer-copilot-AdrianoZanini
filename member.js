function skillsMember() {
    let skills = ['JavaScript', 'React', 'Node', 'CSS', 'HTML'];
    let skillList = document.createElement('ul');
    skillList.id = 'skillList';
    skills.forEach(skill => {
        let skillItem = document.createElement('li');
        skillItem.innerHTML = skill;
        skillList.appendChild(skillItem);
    });
    document.body.appendChild(skillList);
}