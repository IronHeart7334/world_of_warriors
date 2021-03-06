import {Team} from     "../warrior/team.js";
import {Warrior} from  "../warrior/warrior.js";

let nextId = 0;
export const NEWLINE = /\r?\n|\r/;

class User{
    constructor(userName="User", warriors=[], teams=[]){
        this.name = userName;
        this.warriors = new Map();
        warriors.forEach((warrior)=>{
            this.addWarrior(warrior.copy());
        });
        this.teams = new Map();
        teams.forEach((team)=>{
            this.addTeam(team.copy());
        });
        this.id = nextId;
        nextId++;
    }

    addWarrior(warrior){
        this.warriors.set(warrior.name, warrior);
    }

    getWarrior(warriorName){
        if(!this.warriors.has(warriorName)){
            throw new Error(`Warrior not found with name '${warriorName}'`);
        }
        return this.warriors.get(warriorName);
    }

    /*
    Returns an array of all of this User's Warriors
    */
    getAllWarriors(){
        return Array.from(this.warriors.values());
    }

    addTeam(team){
        this.teams.set(team.name, team);
    }

    /*
    Creates a Team with the given name,
    and adds it to this User's list of teams.
    WarriorNames is an array of strings,
    the names of warriors to put on the Team.
    Note that this User must have a warrior
    with each name in warriorNames for this
    to work.
    */
    createTeam(teamName, warriorNames){
        let user = this;
        this.addTeam(new Team(teamName, warriorNames.map((warriorName)=>{
            return user.getWarrior(warriorName);
        })));
    }

    getTeam(teamName){
        if(!this.teams.has(teamName)){
            throw new Error(`Team not found with name '${teamName}'`);
        }
        return this.teams.get(teamName);
    }

    getAllTeams(){
        return Array.from(this.teams.values());
    }
}

const DEFAULT_USER = new User(
    "User",
    [],
    [
        /*
        Create these in defaultTeams.csv
        once these warriors are moved to defaultWarriors.csv
        new Team("Boost", [
            new Warrior("Kwan"),
            new Warrior("Joan"),
            new Warrior("Aka")
        ]),
        new Team("Poison", [
            new Warrior("Ram"),
            new Warrior("Luuser Tarhu"),
            new Warrior("Gunnar")
        ]),
        new Team("Heal", [
            new Warrior("Brutus"),
            new Warrior("Clovis"),
            new Warrior("Blaine")
        ])
        */
    ]
);

export {
    User,
    DEFAULT_USER
};
