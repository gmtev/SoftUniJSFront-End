function taskOneGuildManager(input) {
    let n = Number(input.shift());
    let guild = {};
    for (let i = 0; i < n; i++) {
        let [name, role, abilities] = input[i].split(' ');
        let skills = abilities.split(',');
        guild[name] = {
            role,
            skills: new Set(skills)
        };
    }

    for (let i = n; i < input.length; i++) {
        let commandLine = input[i];
        if (commandLine === 'End') break;
        let [action, name, arg1, arg2] = commandLine.split(' / ');
        if (action === 'Perform') {
            let role = arg1;
            let skill = arg2;
            if (guild[name].role === role && guild[name].skills.has(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }

        } else if (action === 'Reassign') {
            let newRole = arg1;
            guild[name].role = newRole;
            console.log(`${name} has been reassigned to: ${newRole}`);

        } else if (action === 'Learn Skill') {
            let newSkill = arg1;
            if (guild[name].skills.has(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);
            } else {
                guild[name].skills.add(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }
    }

    for (let name in guild) {
        let member = guild[name];
        let sortedSkills = [...member.skills].sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${name}, Role: ${member.role}, Skills: ${sortedSkills.join(', ')}`);
    }
}
