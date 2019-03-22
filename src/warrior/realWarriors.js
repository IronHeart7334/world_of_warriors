var all_teams = [];


// need: Lance, Kadam, Pacorus, Gaja Mada, Gwen, zuu, balash, alboin
export let warriors = [
    ["Naro", [0.766, 0.25, 0.6, 1, 3], "f", "thunder strike", [25, "p"]],
	["Le Roc", [1.05, 0.25, 0.7, 2, 3], "a", "thunder strike", [15, "a"]],
 	["Yada", [0.7, 0.25, 1.1, 2, 1], "w", "thunder strike", [10, "h"]],
 	
 	["Abu", [0.9334, 0.4, 1.05, 1, 1], "f", "beat", [15, "f"]],
 	["Volten", [1.2665, 0.4, 0.58, 2, 3], "f", "beat", [30, "f"]],
 	["Anil", [0.9, 0.4, 0.85, 0, 4], "f", "beat", [-30, "w"]],
 	
 	["Aka", [1.0165, 0.4, 0.9, 0, 2], "e", "beat", [5, "p"]],
 	["Doongara", [1.0334, 0.5, 0.96, 0, 3], "e", "beat", [-30, "e"]],
 	["Seni", [0.9665, 0.45, 0.84, 0, 4], "e", "beat", [-30, "f"]],
 	
 	["Toki", [1, 0.4, 1, 0, 2], "a", "beat", [-15, "e"]],
 	["Maximus", [0.9334, 0.4, 0.74, 1, 3], "a", "beat", [30, "a"]],
 	["Viriathus", [1.0668, 0.4, 0.73, 1, 4], "a", "beat", [10, "p"]],
 	
 	["Zenghis", [1.05, 0.4, 0.95, 1, 1], "w", "beat", [-15, "a"]],
 	["Kasim", [0.95, 0.4, 0.88, 1, 2], "w", "beat", [-30, "w"]],
 	["Alkan", [0.9332, 0.5, 0.7, 1, 3], "w", "beat", [15, "w"]],
 	
 	["Boris", [1.15, 0.45, 0.75, 2, 2], "f", "aoe", [15, "f"]],
 	["Hector", [0.9165, 0.45, 0.8, 2, 3], "f", "aoe", [10, "p"]],
 	
 	["Osgood", [0.7334, 0.4, 1.15, 1, 1], "e", "aoe", [-15, "e"]],
 	["Ironhart", [1.1, 0.45, 0.86, 1, 2], "e", "aoe", [30, "e"]],
 	["Khutulun", [1.3, 0.4, 0.65, 1, 4], "e", "aoe", [30, "e"]],
 	
 	["Erika", [1.0665, 0.4, 0.88, 1, 2], "a", "aoe", [30, "a"]],
 	["Ping", [0.8, 0.55, 0.95, 1, 3], "a", "aoe", [-30, "e"]],
 	["Grim", [0.7, 0.45, 0.67, 1, 4], "a", "aoe", [10, "h"]],
 	
 	["Leon", [0.9, 0.45, 1.05, 1, 1], "w", "aoe", [15, "w"]],
 	["Cutbert", [1.0665, 0.32, 0.8, 1, 2], "w", "aoe", [30, "w"]],
 	["Joan", [0.7334, 0.45, 0.9, 1, 3], "w", "aoe", [10, "p"]],
 	
 	["Tiberius", [0.9334, 0.4, 0.8, 2, 2], "f", "boost", [35, "p"]],
 	["Mohinder", [0.8334, 0.4, 1.1, 2, 2], "f", "boost", [-30, "f"]],
 	
 	["Badda", [1.05, 0.4, 1.05, 1, 2], "e", "boost", [-30, "f"]],
 	["Spurius", [0.85, 0.4, 1.2, 1, 2], "e", "boost", [-30, "e"]],
 	
 	["Crixus", [0.8667, 0.4, 1.05, 2, 2], "a", "boost", [-15, "e"]],
 	["Utu", [1.0665, 0.4, 1.05, 1, 2], "a", "boost", [-30, "e"]],
 	["Labashi", [1.1665, 0.4, 0.81, 1, 2], "a", "boost", [30, "a"]],
 	
 	["Kwan", [0.9, 0.4, 1.02, 2, 2], "w", "boost", [-30, "a"]],
 	["Manawa", [1.1334, 0.4, 1, 0, 2], "w", "boost", [30, "w"]],
 	["Simo", [1.2334, 0.4, 0.7, 2, 2], "w", "boost", [10, "p"]],
 	
 	["Ram", [0.8334, 0.25, 1.13, 0, 1], "w", "poison", [15, "w"]],
 	["Clovis", [0.8, 0.3, 0.91, 1, 2], "w", "healing", [-15, "w"]],
 	["Brutus", [0.9334, 0.1, 0.8, 2, 2], "f", "soul steal", [-15, "f"]],
 	["Gunnar", [1.0665, 0.1, 0.78, 2, 3], "e", "berserk", [15, "e"]],
 	["Kendrix", [0.9334, 0.1, 1.1, 1, 2], "a", "berserk", [-15, "e"]],
 	["Blaine", [0.9167, 0.25, 0.75, 2, 2], "e", "regeneration", [15, "e"]],
 	["Sakuma", [1.1665, 0.15, 0.75, 2, 2], "a", "phantom strike", [5, "p"]],
 	["Zazan", [0.9, 0.25, 0.96, 1, 2], "f", "phantom shield", [15, "f"]],
 	["Sama", [1.0834, 0.3, 1.03, 1, 2], "a", "phantom shield", [10, "p"]],
 	["Breth", [1.1834, 0.25, 0.85, 1, 2], "w", "phantom shield", [-30, "a"]],
 	["Agoolik", [0.9334, 0.30, 1.1, 1, 2], "w", "phantom shield", [-30, "a"]],
 	["Akbar", [1, 0.25, 1, 2, 1], "a", "rolling thunder", [15, "a"]],
 	["Kazumi", [0.95, 0.15, 0.92, 1, 2], "w", "stealth strike", [30, "w"]],
 	["Kanar", [1, 0.20, 0.92, 2, 2], "a", "armor break", [10, "p"]]
];
/*
var starter = new Team([["Abu", ["critical hit"]], ["Toki", ["critical hit"]], ["Zenghis", ["critical hit"]]], "Starter Team");
var arena = new Team([["Ironhart", ["shell"]], ["Erika", ["critical hit"]], ["Boris", ["critical hit"]]], "Arena Favorites");
var real_teams = [starter, arena];
*/