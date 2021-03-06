import {MainMenu} from    "./gui/mainMenu.js";
import {TeamBuilder} from "./gui/teamBuilder.js";
import {TeamSelect} from  "./gui/teamSelect.js";
import {BattlePage} from  "./gui/battlePage.js";

//todo check if user is logged in
export class Controller{
    constructor(){
        this.user = null;
    }

    setUser(user){
        this.user = user;
    }

    //view is an enum (Controller.MAIN_MENU, for example)
    //opt is only used by teamSelect as of now
    setView(viewEnum, opt={}){
        let obj;
        let html;
        switch(viewEnum){
            case Controller.MAIN_MENU:
                obj = new MainMenu();
                html = "./html/mainMenu.html";
                break;
            case Controller.TEAM_SELECT:
                if(this.user === null){
                    alert("You need to log in before fighting");
                } else if(this.user.teams.size < 2){
                    alert("You need at least 2 teams to battle");
                } else {
                    obj = new TeamSelect(this.user, this.user);
                    html = "./html/teamSelect.html";
                }
                break;
            case Controller.TEAM_BUILDER:
                if(this.user === null){
                    alert("You need to log in before creating a team");
                } else {
                    obj = new TeamBuilder(this.user);
                    html = "./html/teamBuilder.html";
                }
                break;
            case Controller.BATTLE:
                obj = new BattlePage(opt.team1.copy(), opt.team2.copy());
                html = "./html/battle.html";
                break;
            default:
                console.error("View not valid: " + viewEnum);
                break;
        }
        if(html){
            fetch(html).then((response)=>{
                return response.text();
            }).then((text)=>{
                let bodyStart = text.indexOf("<body>");
                let bodyEnd = text.indexOf("</body>");
                let body = text.substring(
                    bodyStart + "<body>".length,
                    bodyEnd
                );
                //console.log(body);
                $("body").empty().append(body);
                if(obj){
                    obj.setController(this);
                    obj.linkToPage();
                }
            }).catch((ex)=>{
                console.error(ex);
            });
        }
    }
}
Controller.MAIN_MENU = 0;
Controller.TEAM_SELECT = 1;
Controller.TEAM_BUILDER = 2;
Controller.BATTLE = 3;
