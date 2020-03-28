import {DEFAULT_USER} from "./util/user.js";
import {Controller} from "./controller.js";
import {Team} from "./warrior/team.js";

import {CriticalHit, Guard} from "./warrior/warriorSkills.js";

import {loadAllModules} from "./util/import.js";

let user = DEFAULT_USER;
loadAllModules(user).then(()=>{
    user.warriors.forEach((w)=>{
        console.log(w.toString());
    });
    //need to use then, as 'await' doesn't work, given that this isn't wrapped in an async function
});
//user.teams[0].members[0].addSkill(new CriticalHit());
//user.teams[0].members[1].addSkill(new Guard());

let controller = new Controller();
controller.setUser(user);
controller.setView(Controller.MAIN_MENU);
