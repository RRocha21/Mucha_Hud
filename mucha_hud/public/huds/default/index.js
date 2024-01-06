var teams = {
    left: {},
    right: {}
}

var ticker_text = "ASDASDSDA";

var start_money = {};
var wl_teama = "";
var wl_teamb = "";

var map1 = "none"; // Map 1 Name
var map2 = "none"; // Map 2 Name
var map3 = "none"; // Map 3 Name
var map4 = "none"; // Map 4 Name
var map5 = "none"; // Map 5 Name
var map1_res1 = 0;
var map1_res2 = 0;
var map2_res1 = 0;
var map2_res2 = 0;
var map3_res1 = 0;
var map3_res2 = 0;
var swapsides = 0;
var current_map = 0;
var match_type = "";
var pick = "DECIDER"; // Current map pick
var text_for_map = "DECIDER";

var playing = 2;

var bo = 3;

var flag_replays = 1;

// var t_color = "245, 158, 45";
var ct_color = 'radial-gradient(circle at 50% -20.71%, #83b5ff 0, #156be0 50%, #00286e 100%)';
var dark_ct_color = "0, 0, 0";
// var t_color = 'radial-gradient(circle at 50% -20.71%, #e917ff 0, #9d1bff 25%, #4215e0 50%, #0010b2 75%, #000988 100%)';
var t_color = 'radial-gradient(circle at 50% -20.71%, #f8bb00 0, #f4a900 16.67%, #ec950c 33.33%, #e08015 50%, #d26c1b 66.67%, #c55a1f 83.33%, #b94b23 100%)'
var dark_t_color = "0, 0, 0";

var ct_color_hexa = "#00286e";
var t_color_hexa = "#b94b23";

//var t_color = "254, 160, 47";
//var ct_color = "0, 172, 230";
// var dark_ct_color = "0, 0, 0";
// var dark_t_color = "0, 0, 0";
var warning = "229,57,67";
// var warning = "156, 51, 21";
// var warning = "219, 53, 55";
//var dark_t_color = "26, 14, 0";
//var dark_ct_color = "0, 28, 38";

var bigger_sponsor_background = 0;
var flag_sponsor = false;
var myTimer;
var letters = 0;
var left_name_team = "";
var right_name_team = "";
/* -------------------------------- */
/* -------------------------------- */
var count = 1;
var bigger_sponsor_counter = Math.floor(Math.random() * 4);
numtext = 0;
var txt = ["../../files/img/hud_elements/Sponsors.png", "../../files/img/hud_elements/Sponsors_2.png"];
// var txt_sponsor = "../../sponsors/rtp_logo.png";
var count = 1;

let bottom_sponsor_number = 0;
var bottom_sponsors_array = []
for (var i = 0; i < 15; i++) {
    let bottom_link = loadBottomSponsors(i);
    if (bottom_link !== '1') {
        bottom_sponsors_array.push(bottom_link);
    }
}

$(document).ready(
    function() {
            $(".sponsor > .inner").fadeOut(function() {
                $(this).css("background-image", "url(../../bottom_sponsors/"+bottom_sponsors_array[0]+".png)");
            }).fadeIn();
    });

let bottom_sponsor_length = bottom_sponsors_array.length;

if (bottom_sponsor_length !== 1) {
    $(document).ready(
        function() {
            setInterval(function() {
                if (bottom_sponsor_number >= bottom_sponsor_length - 1) {
                    bottom_sponsor_number = 0;
                } else {
                    bottom_sponsor_number = bottom_sponsor_number + 1;
                }
                $(".sponsor > .inner").fadeOut(function() {
                    $(this).css("background-image", "url(../../bottom_sponsors/"+bottom_sponsors_array[bottom_sponsor_number]+".png)");
                }).fadeIn();
            }, 12000);
        });
} else {
    $(".sponsor > .inner").css("background-image", "url(../../bottom_sponsors/"+bottom_sponsors_array[0]+".png)");
}

let top_sponsor_number = 0;
var top_sponsors_array = []
for (var i = 0; i < 15; i++) {
    let top_link = loadTopSponsors(i);
    if (top_link !== '1') {
        top_sponsors_array.push(top_link);
    }
}

$(document).ready(
    function() {                            
        $(".topbar_i_logo > .background").fadeOut(function() {
            $(this).css("background-image", "url(../../top_sponsors/"+top_sponsors_array[0]+".png)");
        }).fadeIn();
    });

let top_sponsor_length = top_sponsors_array.length;

if (top_sponsor_length !== 1) {
    $(document).ready(
        function() {                            
            setInterval(function() {
                if (top_sponsor_number >= top_sponsor_length - 1) {
                    top_sponsor_number = 0;
                } else {
                    top_sponsor_number = top_sponsor_number + 1;
                }
                $(".topbar_i_logo > .background").fadeOut(function() {
                    $(this).css("background-image", "url(../../top_sponsors/"+top_sponsors_array[top_sponsor_number]+".png)");
                }).fadeIn();
            }, 10000);
        });
}


/******************************** */

if (pick !== "") {
    if (pick == "DECIDER") {

    } else {
        var pick = pick + " PICK";
    }
}

if (map4 == "" && map5 == "") {

    if (playing == 1) {
        var maps = "<font color='#EB4802'>" + map1 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;" + map2 + "&nbsp;&nbsp;&nbsp;&nbsp;" + map3;
    } else if (playing == 2) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#EB4802'>" + map2 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;" + map3;
    } else if (playing == 3) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#EB4802'>" + map3 + "</font>";
    }

}


if (!(map4 == "" && map5 == "")) {

    if (playing == 1) {
        var maps = "<font color='#EB4802'>" + map1 + "</font>&nbsp;&nbsp;" + map2 + "&nbsp;&nbsp;" + map3 + "&nbsp;&nbsp;" + map4 + "&nbsp;&nbsp;" + map5;
    } else if (playing == 2) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map2 + "</font>&nbsp;&nbsp;" + map3 + "&nbsp;&nbsp;" + map4 + "&nbsp;&nbsp;" + map5;
    } else if (playing == 3) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map3 + "</font>&nbsp;&nbsp;" + map4 + "&nbsp;&nbsp;" + map5;
    } else if (playing == 4) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map3 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map4 + "</font>&nbsp;&nbsp;" + map5;
    } else if (playing == 5) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map3 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map4 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map5 + "</font>";
    }

}

function fillObserved(player) {
    let statistics = player.getStats();
    let weapons = player.weapons;
    let right = false;
    let pslot;
    let sideactive;



    if (player.observer_slot == "10") {
        var $playeractive = $(".players_left_container").find("#Player1");
    } else if (player.observer_slot <= 4) {
        var $playeractive = $(".players_left_container").find("#Player" + (player.observer_slot + 1));
    } else if (player.observer_slot >= 5) {
        var $playeractive = $(".players_right_container").find("#Player" + (player.observer_slot - 4));
    }

    let flag = player.country_code || (right ?
        (teams.left.flag || "") :
        (teams.right.flag || ""));

    if (right == true) {
        $("#obsplayer_logo").css("background-image", 'url("/teams/' + teams.left.logo + '")');
        $sideactive = "left";
    } else {
        $("#obsplayer_logo").css("background-image", 'url("/teams/' + teams.right.logo + '")');
        $sideactive = "right";
    }


    // if (player.observer_slot >= 1 && player.observer_slot <= 5)
    //     pslot = player.observer_slot;
    // else {
    //     pslot = player.observer_slot - 5;
    // }

    // let $playeractive = $(".players_" + $sideactive + "_container").find("#player" + pslot);

    // $("#obsplayer_flag").css("background-image", "url('/files/img/flags/" + flag + ".png')")

    $(".observed_container>.k").html(statistics.kills);
    $(".observed_container>.d").html(statistics.deaths);


    $("#nades").html("");


    if (statistics.helmet) {
        $(".observed_container>.helmet").css("opacity", "1");
    } else {
        $(".observed_container>.helmet").css("opacity", "0");
    }

    if (statistics.armor) {
        $(".observed_container>.armor").css("opacity", "1");
    } else {
        $(".observed_container>.armor").css("opacity", "0");
    }
    $playeractive.find(".background").css("outline", "2px solid rgb(236,236,236 )").css("transition", "all 0.5s ease 0s");
    $playeractive.find(".background").css("box-shadow", "0px 0px 15px rgb(236,236,236 )").css("transition", "all 0.5s ease 0s");
    $playeractive.css("transform", "translateY(-20px)").css("transition", "all 0.5s ease 0s");

    obs_player_name = player.name;

    if (player.team == "CT" && teams.left.side == "ct") {

        if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 

        $(".observed_container>.line").css("background-image", ct_color);

        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background-image", ct_color);
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.defusekit ? $("<img width='22px' />").attr("src", "/files/img/elements/defuse.png") : "");

    } else if (player.team == "CT" && teams.right.side == "ct") {

        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 

        $(".observed_container>.line").css("background-image", ct_color);

        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background-image", ct_color);
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.defusekit ? $("<img width='22px' />").attr("src", "/files/img/elements/defuse.png") : "");

    } else if (player.team == "T" && teams.left.side == "t") {

        if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 

        $(".observed_container>.line").css("background-image", t_color);

        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background-image", t_color);
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.bomb ? $("<img width='22px' />").attr("src", "/files/img/elements/defuse.png") : "");

    } else if (player.team == "T" && teams.right.side == "t") {

        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 

        $(".observed_container>.line").css("background-image", t_color);

        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background-image", t_color);
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.bomb ? $("<img width='22px' />").attr("src", "/files/img/elements/defuse.png") : "");

    }

    if (obs_player_name.length > 10) obs_player_name = obs_player_name.substring(0, 10);
    $(".observed_container>.name").html(obs_player_name);

    $("#nades").html("");

    for (let key in weapons) {
        let weapon = weapons[key];
        if (weapon.type == "Grenade") {
            for (let x = 0; x < weapon.ammo_reserve; x++) {
                if (weapon.name == "weapon_flashbang" || weapon.name == "weapon_decoy") {
                    $("#nades").append($("<img style='margin-right: 8px '/>").attr("src", "/files/img/grenades/" + weapon.name + ".png"));
                } else {
                    $("#nades").append($("<img />").attr("src", "/files/img/grenades/" + weapon.name + ".png"));
                }
            }
        }
        if (weapon.state == "active" || weapon.state == "reloading") {
            if (weapon.type == "Grenade" || weapon.type == "C4" || weapon.type == "Knife" || statistics.health == 0) {
                $(".observed_container>.ammo_bar>.ammo_txt").html("");
                $(".observed_container>.ammo_bar").css("opacity","0");
            } else {
                if(weapon.ammo_reserve == "undefined" || weapon.ammo_reserve == null){
                    $(".observed_container>.ammo_bar").css("opacity","0");
                    $(".observed_container>.ammo_bar>.ammo_txt").html("");
                } else {
                    $(".observed_container>.ammo_bar").css("opacity","1");
                    $(".observed_container>.ammo_bar>.ammo_txt").html(weapon.ammo_clip + "<sub>/" +weapon.ammo_reserve + " </sub>");
                }
            }
        }
    }

    $(".observed_container>.health_bar>.health").html(statistics.health);


    // SET AVATAR

    let result = loadAvatar(player.steamid);
    let player_number = 0;

    if (result != 1) {
            $(".observed_container>.photo_container>.photo_player").html("<img width='150px' height='150px' src='/av/" + result + "'/>");
            // $(".observed_container>.photo_container>.photo_player").css("")
    } else if (result == "1") {
        if (player.observer_slot > 5) {
            player_number = player.observer_slot - 5;
        } else {
            player_number = player.observer_slot;
        }
        if (player.team == "CT") {
            $(".observed_container>.photo_container>.photo_player").html($("<img width='150px' height='150px'  />").attr("src", "../../files/img/players/CT_"+player_number+".png"));
        } else {
            $(".observed_container>.photo_container>.photo_player").html($("<img width='150px' height='150px'  />").attr("src", "../../files/img/players/T_"+player_number+".png"));
        }
    }

    

}





let l_alive = 0;
let r_alive = 0;


let l_grenade = 0;
let l_smoke = 0;
let l_molo = 0;
let l_flash = 0;

let pl = 0;
let pl_grenade = 0;
let pl_smoke = 0;
let pl_molo = 0;
let pl_flash = 0;

let r_grenade = 0;
let r_smoke = 0;
let r_molo = 0;
let r_flash = 0;

let pr = 0;
let pr_grenade = 0;
let pr_smoke = 0;
let pr_molo = 0;
let pr_flash = 0;

let l_team_value = 0;
let r_team_value = 0;

var left_team_value = 0;
var right_team_value = 0;

let left_alive = 0;
let right_alive = 0;

function fillPlayers(teams) {

    if (teams.left.players) {
        for (var i = 0; i < 5; i++) {
            if (i >= teams.left.players.length) {
                $("#left").find("#player" + (i + 1)).css("opacity", "0");
            } else {
                fillPlayer(teams.left.players[i], i, "left", teams.left.players.length);
                fillGrenadeLeft(teams.left.players[i], i, "left", teams.left.players.length);
                $("#left").find("#player" + (i + 1)).css("opacity", "1");
                $(".player_count_left>.left_count").html(l_alive);
            }

            left_alive = l_alive;
            if (i == 4) {
                l_grenade = 0;
                l_smoke = 0;
                l_molo = 0;
                l_flash = 0;
                pl = 0;
                pl_grenade = 0;
                pl_smoke = 0;
                pl_molo = 0;
                pl_flash = 0;

                l_alive = 0;
                left_team_value = l_team_value;
                l_team_value = 0;
            }
        }
    }
    if (teams.right.players) {
        for (var i = 0; i < 5; i++) {
            if (i >= teams.right.players.length) {
                $("#right").find("#player" + (i + 1)).css("opacity", "0");
            } else {
                fillPlayer(teams.right.players[i], i, "right", teams.right.players.length);
                fillGrenadeRight(teams.right.players[i], i, "right", teams.left.players.length);
                $("#right").find("#player" + (i + 1)).css("opacity", "1");
                $(".player_count_right>.right_count").html(r_alive);
            }

            right_alive = r_alive;
            if (i == 4) {
                r_grenade = 0;
                r_smoke = 0;
                r_molo = 0;
                r_flash = 0;
                pr = 0;
                pr_grenade = 0;
                pr_smoke = 0;
                pr_molo = 0;
                pr_flash = 0;
                right_team_value = r_team_value;
                r_team_value = 0;
                r_alive = 0;

            }
        }
    }
    var side;
    // if((left_alive != 1) && (right_alive != 1)){
    //     $(".topbar_i_counter>.title").html("PLAYERS ALIVE");
    //     $(".topbar_i_counter>.title").css("background", "rgba(236,236,236)");
    //     $(".topbar_i_counter>.title").css("color", "rgb(0,0,0)");
    //     $(".topbar_i_counter>.title").css("font-size", "15px");
    //     $(".topbar_i_counter>.title").css("line-height", "1.7");
    //     side = 0;
    // }else{  

    //     $(".topbar_i_counter>.title").html("CLUTCH SITUATION");
    //     $(".topbar_i_counter>.title").css("color", "rgb(0,0,0)");
    //     $(".topbar_i_counter>.title").css("font-size", "12px");
    //     $(".topbar_i_counter>.title").css("line-height", "2.6");
    //     if (teams.right.side == "ct") {
    //         $(".topbar_i_counter>.title").css("background", "linear-gradient(to right,rgba("+ t_color +") 0%, rgb("+ t_color +") 20%,  rgb(0,0,0) 50% ,rgb("+ ct_color +") 80%, rgb("+ ct_color +") 100%");
    //     } else {
    //         $(".topbar_i_counter>.title").css("background", "linear-gradient(to right,rgba("+ ct_color +") 0%, rgb("+ ct_color +") 20%,  rgb(0,0,0) 50% ,rgb("+ t_color +") 80%, rgb("+ t_color +") 100%");
    //     }

    // }
}




function fillGrenadeLeft(player, nr, side, max) {
    let slot = player.observer_slot;
    let statistics = player.getStats();
    let weapons = player.getWeapons();
    let steamid = player.steamid;

    if (statistics.health !== 0) {
        l_alive = l_alive + 1;
    }



    for (let key in weapons) {
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let state = weapon.state;
        let view = "";
        let type = weapon.type;

        if (type == "Grenade") {
            for (let x = 0; x < weapon.ammo_reserve; x++) {

                if (name == "hegrenade") {
                    l_grenade++;
                    pl_grenade = pl_grenade + 1;
                }

                if (name == "incgrenade" || name == "molotov") {
                    l_molo++;
                    pl_molo = pl_molo + 2;
                }

                if (name == "flashbang") {
                    l_flash++;
                    pl_flash = pl_flash + 3;
                }

                if (name == "smokegrenade") {
                    l_smoke++;
                    pl_smoke = pl_smoke + 4;
                }

            }

        }

        pl = pl_smoke + pl_flash + pl_molo + pl_grenade;

        var progress_left_spam_width = pl * 100 / 50 + "%";

        $(".Spam_A>.Spam_BG>.Progress").css("width", progress_left_spam_width).css("transition", "all 0.5s ease 0s");


        $(".Spam_A>.Spam_BG>.Bottom_Spam>.HE>.HE_Txt").html("x" + l_grenade);
        $(".Spam_A>.Spam_BG>.Bottom_Spam>.Smoke>.Smoke_Txt").html("x" + l_smoke);
        $(".Spam_A>.Spam_BG>.Bottom_Spam>.Inc>.Inc_Txt").html("x" + l_molo);
        $(".Spam_A>.Spam_BG>.Bottom_Spam>.Flash>.Flash_Txt").html("x" + l_flash);
    }

}

function fillGrenadeRight(player, nr, side, max) {
    let slot = player.observer_slot;
    let statistics = player.getStats();
    let weapons = player.getWeapons();
    let steamid = player.steamid;

    if (statistics.health !== 0) {
        r_alive = r_alive + 1;
    }

    for (let key in weapons) {
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let state = weapon.state;
        let view = "";
        let type = weapon.type;

        if (type == "Grenade") {
            for (let x = 0; x < weapon.ammo_reserve; x++) {

                if (name == "hegrenade") {
                    r_grenade++;
                    pr_grenade = pr_grenade + 1;
                }

                if (name == "incgrenade" || name == "molotov") {
                    r_molo++;
                    pr_molo = pr_molo + 2;
                }

                if (name == "flashbang") {
                    r_flash++;
                    pr_flash = pr_flash + 3;
                }

                if (name == "smokegrenade") {
                    r_smoke++;
                    pr_smoke = pr_smoke + 4;
                }

            }

        }


        pr = pr_smoke + pr_flash + pr_molo + pr_grenade;

        var progress_right_spam_width = pr * 100 / 50 + "%";

        $(".Spam_B>.Spam_BG>.Progress").css("width", progress_right_spam_width).css("transition", "all 0.5s ease 0s");

        $(".Spam_B>.Spam_BG>.Bottom_Spam>.HE>.HE_Txt").html("x" + r_grenade);
        $(".Spam_B>.Spam_BG>.Bottom_Spam>.Smoke>.Smoke_Txt").html("x" + r_smoke);
        $(".Spam_B>.Spam_BG>.Bottom_Spam>.Inc>.Inc_Txt").html("x" + r_molo);
        $(".Spam_B>.Spam_BG>.Bottom_Spam>.Flash>.Flash_Txt").html("x" + r_flash);
    }

}



function fillPlayer(player, nr, side, max) {


    let slot = player.observer_slot;
    let statistics = player.getStats();
    let weapons = player.getWeapons();
    let steamid = player.steamid;

    let team = player.team.toLowerCase();

    let health_color;

    if (player.observer_slot == "10") {
        var $player = $(".players_" + side + "_container").find("#Player1");
    } else if (player.observer_slot <= 4) {
        var $player = $(".players_" + side + "_container").find("#Player" + (nr + 2));
    } else if (player.observer_slot >= 5) {
        var $player = $(".players_" + side + "_container").find("#Player" + (nr + 1));
    }

    let $bottom = $player.find(".bottom_bar");
    let $top = $player.find(".top_bar");

    let result = loadAvatar(player.steamid);
    let player_number = 0;

        if (result != "1") {
            $player.find(".photo_container>.photo_player").html($("<img width='150px' height='150px'  />").attr("src", "/av/" + result));

        } else if (result == "1") {
            if (player.observer_slot > 5) {
                player_number = player.observer_slot - 5;
            } else {
                player_number = player.observer_slot;
            }
            if (team == "ct") {

                $player.find(".photo_container>.photo_player").html($("<img width='150px' height='150px'  />").attr("src", "../../files/img/players/CT_"+player_number+".png"));
                

            } else {
                $player.find(".photo_container>.photo_player").html($("<img width='150px' height='150px'  />").attr("src", "../../files/img/players/T_"+player_number+".png"));

            }
        }


    let gradient = "linear-gradient(to " + side + ", rgba(25,25,25,0)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";


    if (side == "right") {
        if (team == "ct") {
            health_color = ct_color;
;
            $(".bo5_container>.right_series").find(".block").css("border-color", "rgba(" + ct_color + " ,1)");
            $(".bo5_container>.right_series").find(".win").css("background-image", ct_color);
            $(".header_container>.win_container_right").css("background-image", ct_color);
            $(".header_container>.pause_container_right").css("background-image", ct_color);
            $(".header_container>.right_series").css("background-image", ct_color);
            $(".header_container>.right_score").css("background-image", ct_color);
            $(".alerts_container>.right>.background").css("background-image", ct_color);

        } else {
            health_color = t_color;

            $(".bo5_container>.right_series").find(".block").css("border-color", "rgba(" + t_color + ",1)");
            $(".bo5_container>.right_series").find(".win").css("background-image", t_color);
            $(".header_container>.win_container_right").css("background-image", t_color);
            $(".header_container>.pause_container_right").css("background-image", t_color);
            $(".header_container>.right_series").css("background-image", t_color);
            $(".header_container>.right_score").css("background-image", t_color);
            $(".alerts_container>.right>.background").css("background-image", t_color);
        }
    }

    if (side == "left") {
        if (team == "ct") {
            health_color = ct_color;
            $(".bo5_container>.left_series").find(".block").css("border-color", "rgba(" + ct_color + " ,1)");
            $(".bo5_container>.left_series").find(".win").css("background-image", ct_color);
            $(".alerts_container>.left>.background").css("background-image", ct_color);
            $(".header_container>.win_container_left").css("background-image", ct_color);
            $(".header_container>.pause_container_left").css("background-image", ct_color);
            $(".header_container>.left_series").css("background-image", ct_color);
            $(".header_container>.left_score").css("background-image", ct_color);
        } else {
            health_color = t_color;
            $(".bo5_container>.left_series").find(".block").css("border-color", "rgba(" + t_color + ",1)");
            $(".bo5_container>.left_series").find(".win").css("background-image", t_color);
            $(".alerts_container>.left>.background").css("background-image", t_color);
            $(".header_container>.win_container_left").css("background-image", t_color);
            $(".header_container>.pause_container_left").css("background-image", t_color);
            $(".header_container>.left_series").css("background-image", t_color);
            $(".header_container>.left_score").css("background-image", t_color);
        }
    }

    //PLAYER KILLS AND DEATHS
    $player.find(".frags").html(statistics.round_kills);

    if (statistics.round_kills > 0) {
        $player.find(".Round_Kills>.background2").css("transition", "all 0.5s ease 0s").css("transform", "translateY(0px)");
        $player.find(".Round_Kills>.background2").css("opacity", "1");
        $player.find(".Round_Kills>.icon").css("transition", "all 0.5s ease 0s").css("transform", "translateY(0px)");
        $player.find(".Round_Kills>.icon").css("opacity", "1");
        $player.find(".Round_Kills>.frags").css("transition", "all 0.5s ease 0s").css("transform", "translateY(0px)");
        $player.find(".Round_Kills>.frags").css("opacity", "1");
    } else {
        $player.find(".Round_Kills>.background2").css("transition", "all 0.5s ease 0s").css("transform", "translateY(-50px)");
        $player.find(".Round_Kills>.background2").css("opacity", "0");
        $player.find(".Round_Kills>.icon").css("transition", "all 0.5s ease 0s").css("transform", "translateY(-50px)");
        $player.find(".Round_Kills>.icon").css("opacity", "0");
        $player.find(".Round_Kills>.frags").css("transition", "all 0.5s ease 0s").css("transform", "translateY(-50px)");
        $player.find(".Round_Kills>.frags").css("opacity", "0");
    }


    if (statistics.round_kills > 0) {
        $bottom.find(".flex_kd>.k").html(statistics.kills);
    } else {
        $bottom.find(".flex_kd>.k").html(statistics.kills);
    }

    $bottom.find(".flex_kd>.d").text(statistics.deaths);


    //OBSERVED

    // $player.find(".separator").removeClass("observed");
    // $player.find(".bottom_bar").removeClass("observed_left");
    // $player.find(".bottom_bar").removeClass("observed_right");
    $player.find(".background").css("outline", "none").css("transition", "all 0.5s ease 0s");
    $player.find(".background").css("box-shadow", "none").css("transition", "all 0.5s ease 0s");
    $player.css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");


    /*################################################# CHANGING WHEN A PLAYERS DIES #################################################### */

    $player.removeClass("dead").addClass("alive").removeClass(statistics.health == 0 ? "alive" : "").addClass(statistics.health == 0 ? "dead" : "");
    $player.find(".health_text").removeClass("dead_life").addClass("alive_life").removeClass(statistics.health == 0 ? "alive_life" : "").addClass(statistics.health == 0 ? "dead_life" : "");
    if (flag_replays == 1) {
        $player.addClass("replays");
    }

    if (statistics.health == 0) {
        // $player.css("height", "150px");weapon_icon
        $player.find(".weapon_icon").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        $player.find(".moneys_background").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        $player.find(".moneys").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        $player.find(".bomb_defuse_background").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        $player.find(".bomb_defuse").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        $player.find(".background").css("transform", "translateY(70px)").css("transition", "all 0.5s ease 0s");
        $player.find(".Round_Kills").css("transform", "translateY(70px)").css("transition", "all 0.5s ease 0s");
        $player.find(".background").css("height", "150px").css("transition", "all 0.5s ease 0s");
        // $player.find(".Round_Kills>.background").css("height", "38px").css("transition", "all 0.5s ease 0s");
        $top.find(".health_red").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
        $player.find(".health_icon").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        $player.find(".armor_background").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        $player.find(".k").css("transform", "translateY(147px)").css("transition", "all 0.5s ease 0s");
        $player.find(".k_icon").css("transform", "translateY(147px)").css("transition", "all 0.5s ease 0s");
        $player.find(".d").css("transform", "translateY(147px)").css("transition", "all 0.5s ease 0s");
        $player.find(".d_icon").css("transform", "translateY(147px)").css("transition", "all 0.5s ease 0s");

    } else {
        $player.find(".weapon_icon").css("opacity", "1").css("transition", "all 0.5s ease 0s");
        $player.find(".moneys_background").css("opacity", "1").css("transition", "all 0.5s ease 0s");
        $player.find(".moneys").css("opacity", "1").css("transition", "all 0.5s ease 0s");
        $player.find(".bomb_defuse_background").css("opacity", "1").css("transition", "all 0.5s ease 0s");
        $player.find(".bomb_defuse").css("opacity", "1").css("transition", "all 0.5s ease 0s");
        $player.find(".Round_Kills").css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");
        $player.find(".background").css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");
        $player.find(".background").css("height", "220px").css("transition", "all 0.5s ease 0s");
        $top.find(".health_red").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
        $player.find(".health_icon").css("opacity", "1").css("transition", "all 0.5s ease 0s");
        $player.find(".armor_background").css("opacity", "1").css("transition", "all 0.5s ease 0s");
        $player.find(".k").css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");
        $player.find(".k_icon").css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");
        $player.find(".d").css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");
        $player.find(".d_icon").css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");
    }


    /* ################################################################################################################################### */

    // SIDE COLORS

    if (team == "ct") {
        $top.find(".health_bar").css("background-image", ct_color);
        $player.find(".health_shade").css("background-image", ct_color);
        $player.find(".separator").css("background-image", ct_color);

    } else if (team == "t") {
        $top.find(".health_bar").css("background-image", t_color);
        $player.find(".health_shade").css("background-image", t_color);
        $player.find(".separator").css("background-image", t_color);
    }



    if (player.observer_slot <= 4) {

        player_name = player.name;
        if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
            player_name = player_name.slice(letters);
        } 
        if (player_name.length > 10) player_name = player_name.substring(0, 10);
        $player.find(".player_name").html(player_name.split(" ").join(""));

        $player.find(".number").html(player.observer_slot + 1);

        $top.find(".health_bar").css("height", statistics.health + "%");
        $top.find(".health_red").css("height", statistics.health + "%").css("transition", "height 1.3s ease 1s");
        $player.find(".health_shade").css("height", statistics.health + "%");
        if (statistics.health < 40) {
            $player.find(".health_shade").css("opacity", "0.8");
        } else if (statistics.health == 0 ) {
            $player.find(".health_shade").css("opacity", "0");
        } else {
            $player.find(".health_shade").css("opacity", "0");
        }



        $player.find(".player_bar_shadow").css("height", statistics.health + "%");

        if (statistics.health == 0) {
            var flash_amount = 0;
        } else {
            var flash_amount = (statistics.flashed * 0.9 / 255);
        }
        $player.find(".flash").css("background", "rgba(255,255,255," + flash_amount + ")");

        l_team_value = l_team_value + statistics.money;

        if (statistics.health == 0) {
            gradient = "linear-gradient(to " + side + ", rgb(25,25,25)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";
            if ($top.find(".player_bar").hasClass("test")) {} else {
                $top.find(".player_bar").addClass('test');
            }
        } else {
            $top.find(".player_bar").removeClass('test');
        }

        if (statistics.health <= 98) {
            $top.find(".health_bar").css("border-radius", "0px 0px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        } else {
            $top.find(".health_bar").css("border-radius", "10px 10px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        }

    } else if (player.observer_slot < 9) {
        player_name = player.name;
        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            player_name = player_name.slice(letters);
        } 
        if (player_name.length > 10) player_name = player_name.substring(0, 10);
        $player.find(".player_name").html(player_name.split(" ").join(""));

        $player.find(".number").html(player.observer_slot + 1);

        $top.find(".health_bar").css("height", statistics.health + "%");
        $top.find(".health_red").css("height", statistics.health + "%").css("transition", "height 1.3s ease 1s");
        $player.find(".health_shade").css("height", statistics.health + "%");
        if (statistics.health < 40) {
            $player.find(".health_shade").css("opacity", "0.8");
        } else if (statistics.health == 0 ) {
            $player.find(".health_shade").css("opacity", "0");
        } else {
            $player.find(".health_shade").css("opacity", "0");
        }
        if (statistics.health == 0) {
            var flash_amount = 0;
        } else {
            var flash_amount = (statistics.flashed * 0.9 / 255);
        }


        $player.find(".flash").css("background", "rgba(255,255,255," + flash_amount + ")");

        if (statistics.health == 0) {
            gradient = "linear-gradient(to " + side + ", rgb(25,25,25)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";
            if ($top.find(".player_bar").hasClass("test")) {} else {
                $top.find(".player_bar").addClass('test');
            }
        } else {
            $top.find(".player_bar").removeClass('test');
        }

        if (statistics.health <= 98) {
            $top.find(".health_bar").css("border-radius", "0px 0px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        } else {
            $top.find(".health_bar").css("border-radius", " 10px 10px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        }

        r_team_value = r_team_value + statistics.money;

    } else if (player.observer_slot == 10) {

        player_name = player.name;
        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            player_name = player_name.slice(letters);
        } 
        if (player_name.length > 10) player_name = player_name.substring(0, 10);
        $player.find(".player_name").html(player_name.split(" ").join(""));

        $player.find(".number").html("1");

        $top.find(".health_bar").css("height", statistics.health + "%");
        $top.find(".health_red").css("height", statistics.health + "%").css("transition", "height 1.3s ease 1s");
        $player.find(".health_shade").css("height", statistics.health + "%");
        if (statistics.health < 40) {
            $player.find(".health_shade").css("opacity", "0.8");
        } else if (statistics.health == 0 ) {
            $player.find(".health_shade").css("opacity", "0");
        } else {
            $player.find(".health_shade").css("opacity", "0");
        }
        if (statistics.health == 0) {
            var flash_amount = 0;
        } else {
            var flash_amount = (statistics.flashed * 0.9 / 255);
        }


        $player.find(".flash").css("background", "rgba(255,255,255," + flash_amount + ")");

        if (statistics.health == 0) {
            gradient = "linear-gradient(to " + side + ", rgb(25,25,25)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";
            if ($top.find(".player_bar").hasClass("test")) {} else {
                $top.find(".player_bar").addClass('test');
            }
        } else {
            $top.find(".player_bar").removeClass('test');
        }

        if (statistics.health <= 98) {
            $top.find(".health_bar").css("border-radius", "0px 0px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        } else {
            $top.find(".health_bar").css("border-radius", "10px 10px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        }

        l_team_value = l_team_value + statistics.money;
    } else if (player.observer_slot == 9) {
        player_name = player.name;
        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            player_name = player_name.slice(letters);
        } 
        if (player_name.length > 10) player_name = player_name.substring(0, 10);
        $player.find(".player_name").html(player_name.split(" ").join(""));

        $player.find(".number").html("0");

        $top.find(".health_bar").css("height", statistics.health + "%");
        $top.find(".health_red").css("height", statistics.health + "%").css("transition", "height 1.3s ease 1s");
        $player.find(".health_shade").css("height", statistics.health + "%");
        if (statistics.health < 40) {
            $player.find(".health_shade").css("opacity", "0.8");
        } else if (statistics.health == 0 ) {
            $player.find(".health_shade").css("opacity", "0");
        } else {
            $player.find(".health_shade").css("opacity", "0");
        }
        if (statistics.health == 0) {
            var flash_amount = 0;
        } else {
            var flash_amount = (statistics.flashed * 0.9 / 255);
        }


        $player.find(".flash").css("background", "rgba(255,255,255," + flash_amount + ")");

        if (statistics.health == 0) {
            gradient = "linear-gradient(to " + side + ", rgb(25,25,25)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";
            if ($top.find(".player_bar").hasClass("test")) {} else {
                $top.find(".player_bar").addClass('test');
            }
        } else {
            $top.find(".player_bar").removeClass('test');
        }

        if (statistics.health <= 98) {
            $top.find(".health_bar").css("border-radius", "0px 0px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        } else {
            $top.find(".health_bar").css("border-radius", " 10px 10px 10px 10px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 10px 10px")
        }

        r_team_value = r_team_value + statistics.money;
    }


    $player.find(".health_text").text(statistics.health);


    $top.find(".kad_bar").text(statistics.kills + " K / " + statistics.assists + " A / " + statistics.deaths + " D");



    if (statistics.helmet) {
        $player.find(".helmet_background").css("display", "block");
    } else {
        $player.find(".helmet_background").css("display", "none");
    }
    if (statistics.armor > 0) {
        $player.find(".armor_background").css("display", "block");
    } else {
        $player.find(".armor_background").css("display", "none");
    }

    if (statistics.health !== 0) {
        $player.find(".flex_money_bomb>.money").css("display", "block");
        if (team == "ct") {
            if (statistics.defusekit) {
                $player.find(".flex_money_bomb>.defuse").css("display", "block");
            } else {
                $player.find(".flex_money_bomb>.defuse").css("display", "none");
            }
            $player.find(".flex_money_bomb>.bomb_2").css("display", "none");
        } else {
            let flag = false;
            for (let key in weapons) {
                let weapon = weapons[key];
                let type = weapon.type;
                if (type == "C4") {
                    flag = true;
                }
            }
            if (!flag) {
                $player.find(".flex_money_bomb>.bomb_2").css("display", "none");
            } else {
                $player.find(".flex_money_bomb>.bomb_2").css("display", "block");
                $player.find(".flex_money_bomb>.bomb_2>.bomb_image").css("display", "block");
                $player.find(".flex_money_bomb>.bomb_2>.bomb_image").css("background-image", "url(../../files/img/elements/bomb.png)");
            }
            $player.find(".flex_money_bomb>.defuse").css("display", "none");
        }
    } else {
        $player.find(".flex_money_bomb>.defuse").css("display", "none");
        $player.find(".flex_money_bomb>.money").css("display", "none");
        $player.find(".flex_money_bomb>.bomb_2").css("display", "none");
    }

    // $player.find(".bomb_defuse").html(statistics.defusekit ? $("<img width='13px' />").attr("src", "/files/img/elements/defuse.png") : "");



    $bottom.find(".flex_money_bomb>.money>.moneys").text("$" + statistics.money);

    $bottom.find(".weapon_icon").html("");
    $bottom.find(".grenades").html("");
    $top.find(".weapon_icon").html("");
    $bottom.find("#deaths_pp").html("");

    var best= 0;
    for (let key in weapons) {
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let state = weapon.state;
        let view = "";
        let type = weapon.type;

        if (type != "C4" && type != "Knife") {
            view += weapon.state == "active" ? "checked" : "";
            if (type == "Grenade") {
                for (let x = 0; x < weapon.ammo_reserve; x++) {
                    $bottom.find(".grenades").append($("<img />").attr("src", "/files/img/grenades/weapon_" + name + ".png").addClass(view));
                }
            } else if (type) {
                view += side == "right" ? " img-hor" : "";
                if (type == "Pistol") {
                    if (best == 0) {
                        if (side == "right") {
                            $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                        } else {
                            $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                        }
                    }
                } else {
                    best = 1;
                    if (side == "right") {
                        $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                    } else {
                        $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                    }
                }
            }
        }
    }


    if (!start_money[steamid]) {
        start_money[steamid] = statistics.money;
    }
    $("#money_bar" + slot).find("#stat_money_bar").html("-" + (start_money[steamid] - statistics.money) + "$");
}


var isDefusing = false;


var bomb_time,
    bomb_timer,
    bomb_timer_css;
bomb_time = 0;

function bomb(time) {
    if (Math.pow((time - bomb_time), 2) > 1) {
        clearInterval(bomb_timer);
        bomb_time = parseFloat(time);
        if (bomb_time > 0) {
            bomb_timer = setInterval(function() {
                bomb_time = bomb_time - 0.01;
            }, 10);
        } else {
            clearInterval(bomb_timer);
        }
    }
}

function resetBomb() {
    clearInterval(bomb_timer);
}


//SOME other weird vars
var menu = false;
var freezetime = false;
let last_round = 0;

function updatePage(data) {

    var observed = data.getObserved();
    var phase = data.phase();
    var team_one = data.getTeamOne();
    var team_two = data.getTeamTwo();

    var matchup = data.getMatchType();
    var match = data.getMatch();

    var map = data.map();
    var map_text = map.name.slice(3);

    letters = (match.letter !== undefined) ? match.letter.letters : "none"; // Map 1 Name
    map1 = (match.map_pick !== undefined) ? match.map_pick.map1 : "none"; // Map 1 Name
    map2 = (match.map_pick !== undefined) ? match.map_pick.map2 : "none"; // Map 2 Name
    map3 = (match.map_pick !== undefined) ? match.map_pick.map3 : "none"; // Map 3 Name

    // current_map = (match.map_pick !== undefined) ? match.map_pick.map_current : "3";
    swapsides = (match.map_pick !== undefined) ? match.map_pick.sides_swap : "0";


    map1_res1 = (match.map_1_res !== undefined) ? match.map_1_res.map_left_res : "0"; 
    map1_res2 = (match.map_1_res !== undefined) ? match.map_1_res.map_right_res : "0"; 
    map2_res1 = (match.map_2_res !== undefined) ? match.map_2_res.map_left_res : "0"; 
    map2_res2 = (match.map_2_res !== undefined) ? match.map_2_res.map_right_res : "0"; 
    map3_res1 = (match.map_3_res !== undefined) ? match.map_3_res.map_left_res : "0"; 
    map3_res2 = (match.map_3_res !== undefined) ? match.map_3_res.map_right_res : "0"; 

    match_type = (match.server !== undefined) ? match.server.server_type : "none";


    if (map_text == map1) {
        current_map = 1;
    } else if (map_text == map2) {
        current_map = 2;
    } else if (map_text == map3) {
        current_map = 3;
    } else {
        current_map = 3;
    }

    let left,
        right;
    var players = data.getPlayers();
    var round = data.round();
    var map = data.map();
    var previously = data.previously();

    var round_now = map.round + (round.phase == "over" || round.phase == "intermission" ?
        0 :
        1);
    if ((round.phase == "freezetime" && !freezetime) || round_now != last_round) {
        start_money = {};
    }


    var round_wins = map.round_wins;
    var result = [];
    for (var i in round_wins)
        result.push([i, round_wins[i]]);

    to1 = result.length;
    to = to1 + 0;

    let round_html = "";
    let round_html_ct_first = "";
    let round_html_t_first = "";
    let round_html_ct_second = "";
    let round_html_t_second = "";
    let ifOT = "";



    for (i = 0; i < result.length; i++) {

        nr = i + 1;

        if (map.round <= 30) {
            if (nr <= 15) {

                ifOT = "";

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_first = round_html_ct_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_first = round_html_ct_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_first = round_html_t_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_first = round_html_t_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            } else if (nr > 15 && nr <= 30) {

                ifOT = "";

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_second = round_html_ct_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_second = round_html_ct_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_second = round_html_t_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_second = round_html_t_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            }
        } else if (map.round == 31) {

        } else if (map.round > 31) {
            if (nr <= 3) {

                ifOT = "<div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div>";

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_first = round_html_ct_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_first = round_html_ct_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_first = round_html_t_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_first = round_html_t_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            }
            if (nr <= 6 && nr > 3) {

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_second = round_html_ct_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_second = round_html_ct_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_second = round_html_t_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_second = round_html_t_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            }


        }


    }


    $("#stat_ct_first").html(ifOT + round_html_ct_first);
    $("#stat_ct_second").html(round_html_ct_second);
    $("#stat_t_first").html(ifOT + round_html_t_first);
    $("#stat_t_second").html(round_html_t_second);


    var longd = 10;
    var team_ct = data.getCT();
    var team_t = data.getT();
    var test_player2 = data.getPlayer(2);
    var tscore = [];
    $("body").css("display", !map || menu ?
        "none" :
        "block");
    if (test_player2) {
        left = test_player2
            .team
            .toLowerCase() == "ct" ?
            team_ct :
            team_t;
        right = test_player2
            .team
            .toLowerCase() != "ct" ?
            team_ct :
            team_t;

        crlleft = left.consecutive_round_losses;
        crlright = right.consecutive_round_losses;

        teams.left.timeouts = left.timeouts_remaining;
        teams.right.timeouts = right.timeouts_remaining;

        teams.left.name = team_one.team_name || left.name;
        teams.right.name = team_two.team_name || right.name;

        teams.left.score = left.score;
        teams.right.score = right.score;

        teams.left.flag = team_one.country_code || null;
        teams.right.flag = team_two.country_code || null;

        teams.left.logo = team_one.logo || null;
        teams.right.logo = team_two.logo || null;

        teams.left.map_score = team_one.map_score || 0;
        teams.right.map_score = team_two.map_score || 0;

        teams.left.side = left.side || null;
        teams.right.side = right.side || null;

        teams.left.players = left.players || null;
        teams.right.players = right.players || null;

        $("#left_blocks")
            .removeClass("ct t")
            .addClass(test_player2.team.toLowerCase());
        $("#right_blocks")
            .removeClass("ct t")
            .addClass(test_player2.team.toLowerCase() != "ct" ?
                "ct" :
                "t");

        var crl_value_left = 0;
        var crl_value_right = 0;
        var crl_x_left = 0;
        var crl_x_right = 0;

        if (crlleft == 0) {
            crl_value_left = 1400;
            crl_x_left = 0;
        } else if (crlleft == 1) {
            crl_value_left = 1900;
            crl_x_left = 1;
        } else if (crlleft == 2) {
            crl_value_left = 2400;
            crl_x_left = 2;
        } else if (crlleft == 3) {
            crl_value_left = 2900;
            crl_x_left = 3;
        } else if (crlleft >= 4) {
            crl_value_left = 3400;
            crl_x_left = 4;
        }

        if (crlright == 0) {
            crl_value_right = 1400;
            crl_x_right = 0;
        } else if (crlright == 1) {
            crl_value_right = 1900;
            crl_x_right = 1;
        } else if (crlright == 2) {
            crl_value_right = 2400;
            crl_x_right = 2;
        } else if (crlright == 3) {
            crl_value_right = 2900;
            crl_x_right = 3;
        } else if (crlright >= 4) {
            crl_value_right = 3400;
            crl_x_right = 4;
        }





        // Update Firepower


        var total_money = left.equip_value + right.equip_value;
        var left_percentage = left.equip_value / total_money * 100;
        var right_percentage = right.equip_value / total_money * 100;

        $(".firepower > .left").css("width", left_percentage + "%");
        $(".firepower > .right").css("width", right_percentage + "%");


    }


    /* Update Header */

    // Update Round
    var round_now = teams.left.score + teams.right.score + 1;

    // Update Names
    left_name_team = teams.left.name;
    right_name_team = teams.right.name;
    var team_left_name = teams.left.name;
    if (team_left_name.length > 13) team_left_name = team_left_name.substring(0, 13);
    $(".left_name").html(team_left_name);

    var team_right_name = teams.right.name;
    if (team_right_name.length > 13) team_right_name = team_right_name.substring(0, 13);
    $(".right_name").html(team_right_name);

    // Update Colors

    var left_color;
    var right_color;


    // Testing Teams
    if (teams.left.side == "ct" && teams.right.side == "t") {

        left_color = ct_color;
        right_color = t_color;
        dark_left_color = dark_ct_color;
        dark_right_color = dark_t_color;
        right_color_hexa = t_color_hexa;
        left_color_hexa = ct_color_hexa;



    } else if (teams.left.side == "t" && teams.right.side == "ct") {

        left_color = t_color;
        right_color = ct_color;
        dark_left_color = dark_t_color;
        dark_right_color = dark_ct_color;
        right_color_hexa = ct_color_hexa;
        left_color_hexa = t_color_hexa;


    }


    if ((matchup && matchup.toLowerCase() !== "bo3") || !matchup) {
        bo = 1;
        $(".header_container>.left_series>.bo1").css("opacity", "0");
        $(".header_container>.left_series>.bo3_map1").css("opacity", "0");
        $(".header_container>.left_series>.bo3_map2").css("opacity", "0");
        $(".header_container>.right_series>.bo1").css("opacity", "0");
        $(".header_container>.right_series>.bo3_map1").css("opacity", "0");
        $(".header_container>.right_series>.bo3_map2").css("opacity", "0");
        var map3_let = data.map();
        var map3 = map3_let.name.slice(3);
        current_map = 1; 
    } else if (matchup && matchup.toLowerCase() == "bo3") {
        bo = 3;
        $(".header_container>.left_series>.bo1").css("opacity", "0");
        $(".header_container>.right_series>.bo1").css("opacity", "0");
        $(".header_container>.left_series>.bo3_map1").css("opacity", "1");
        $(".header_container>.left_series>.bo3_map2").css("opacity", "1");
        $(".header_container>.right_series>.bo3_map1").css("opacity", "1");
        $(".header_container>.right_series>.bo3_map2").css("opacity", "1");

        let bo3_team1_result = 0;
        let bo3_team2_result = 0;

        if ( current_map >= 2 ) {
            if (parseInt(map1_res1) > parseInt(map1_res2)) {
                bo3_team1_result = 1;
            } else if (parseInt(map1_res1) < parseInt(map1_res2)) {
                bo3_team2_result = 1;
            }
            if (current_map == 3) {
                if (parseInt(map2_res1) > parseInt(map2_res2)) {
                    bo3_team1_result = bo3_team1_result + 1;
                } else if (parseInt(map2_res1) < parseInt(map2_res2)) {
                    bo3_team2_result = bo3_team2_result + 1;
                }
            }
        }

        if (bo3_team1_result == 1) {
            $(".header_container>.left_series>.bo3_map1").css("background", "rgb(236,236,236)");
        } else if (bo3_team1_result == 2) {
            $(".header_container>.left_series>.bo3_map1").css("background", "rgb(236,236,236)");
            $(".header_container>.left_series>.bo3_map2").css("background", "rgb(236,236,236)");
        }

        if (bo3_team2_result == 1) {
            $(".header_container>.right_series>.bo3_map1").css("background", "rgb(236,236,236)");
        } else if (bo3_team2_result == 2) {
            $(".header_container>.right_series>.bo3_map1").css("background", "rgb(236,236,236)");
            $(".header_container>.right_series>.bo3_map2").css("background", "rgb(236,236,236)");
        }
    } 

    // Apply

    var team_pick_right_name = teams.right.name;
    if (team_pick_right_name.length > 13) team_pick_right_name = team_pick_right_name.substring(0, 13);

    var team_pick_left_name = teams.left.name;
    if (team_pick_left_name.length > 13) team_pick_left_name = team_pick_left_name.substring(0, 13);
    /* MAP PICKS START  */
    if (swapsides == 0) {
        $(".MapPick_BG>.Map1>.Team_Name").html("<font color='#fff'>" + team_pick_left_name + "</font>");
        $(".MapPick_BG>.Map1").css("background-image", left_color);
        $(".MapPick_BG>.Map1>.Map").css("background-image", "url(../../files/img/maps/" + map1 + ".jpg)");
        $(".MapPick_BG>.Map1>.Map_Name").html("<font color='#fff'>" + map1 + "</font>");

        if (current_map == 1) {
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'> CURRENT </font>");
            $(".MapPick_BG>.Map1>.Map_Shade").css("box-shadow", "inset 0px -55px 55px -55px rgb("+ left_color +")");
        } else {
            $(".MapPick_BG>.Map1>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'>" + map1_res1 + " - " + map1_res2 + "</font>");
        }

        $(".MapPick_BG>.Map2>.Team_Name").html("<font color='#fff'> " + team_pick_right_name + " </font>");
        $(".MapPick_BG>.Map2").css("background-image", right_color);
        $(".MapPick_BG>.Map2>.Map").css("background-image", "url(../../files/img/maps/" + map2 + ".jpg)");
        $(".MapPick_BG>.Map2>.Map_Name").html("<font color='#fff'>" + map2 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'>CURRENT</font>");
            $(".MapPick_BG>.Map2>.Map_Shade").css("box-shadow", "inset 0px -55px 55px -55px rgb("+ right_color +")");
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'> NEXT </font>");
        } else {
            $(".MapPick_BG>.Map2>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'>" + map2_res1 + " - " + map2_res2 + "</font>");
        }

        $(".MapPick_BG>.Map3>.Team_Name").html("<font color='#fff'> DECIDER </font>");
        $(".MapPick_BG>.Map3>.Map").css("background-image", "url(../../files/img/maps/" + map3 + ".jpg)");
        $(".MapPick_BG>.Map3>.Map_Name").html("<font color='#fff'>" + map3 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'>NEXT</font>");
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
        } else {
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'>CURRENT</font>");
        }
    } else {
        $(".MapPick_BG>.Map1>.Team_Name").html("<font color='#fff'>" + team_pick_right_name + "</font>");
        $(".MapPick_BG>.Map1").css("background", "rgb("+ right_color +")");
        $(".MapPick_BG>.Map1>.Map").css("background-image", "url(../../files/img/maps/" + map1 + ".jpg)");
        $(".MapPick_BG>.Map1>.Map_Name").html("<font color='#fff'>" + map1 + "</font>");

        if (current_map == 1) {
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'> CURRENT </font>");
            $(".MapPick_BG>.Map1>.Map_Shade").css("box-shadow", "inset 0px -55px 55px -55px rgb("+ right_color +")");
        } else {
            $(".MapPick_BG>.Map1>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'>" + map1_res1 + " - " + map1_res2 + "</font>");
        }

        $(".MapPick_BG>.Map2>.Team_Name").html("<font color='#fff'> " + team_pick_left_name + " </font>");
        $(".MapPick_BG>.Map2").css("background", "rgb("+ left_color +")");
        $(".MapPick_BG>.Map2>.Map").css("background-image", "url(../../files/img/maps/" + map2 + ".jpg)");
        $(".MapPick_BG>.Map2>.Map_Name").html("<font color='#fff'>" + map2 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'>CURRENT</font>");
            $(".MapPick_BG>.Map2>.Map_Shade").css("box-shadow", "inset 0px -55px 55px -55px rgb("+ left_color +")");
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'> NEXT </font>");
        } else {
            $(".MapPick_BG>.Map2>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'>" + map2_res1 + " - " + map2_res2 + "</font>");
        }

        $(".MapPick_BG>.Map3>.Team_Name").html("<font color='#000'> DECIDER </font>");
        $(".MapPick_BG>.Map3>.Map").css("background-image", "url(../../files/img/maps/" + map3 + ".jpg)");
        $(".MapPick_BG>.Map3>.Map_Name").html("<font color='#fff'>" + map3 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'>NEXT</font>");
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
        } else {
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'>CURRENT</font>");
        }
    }
    $(".round_winner>.rounds").html("<font color='#fff'>1</font>");
    /* MAP PICKS FINITO  */


    /* LOSS BONUS START*/
    var loss_bonus_left = crl_x_left;
    var loss_bonus_right = crl_x_right;
    var money_bonus_right = crl_value_right;
    var money_bonus_left = crl_value_left;


    if (loss_bonus_right == 0) {
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else if (loss_bonus_right == 1) {
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else if (loss_bonus_right == 2) {
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else if (loss_bonus_right == 3) {
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else {
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("border", "none");
        $(".LossBonus_B>.bonus_boxes>.bonus_box_1").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_2").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_3").css("background-image", right_color);
        $(".LossBonus_B>.bonus_boxes>.bonus_box_4").css("background-image", right_color);
    }

    if (loss_bonus_left == 0) {
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else if (loss_bonus_left == 1) {
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else if (loss_bonus_left == 2) {
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("background", "rgba(236,236,236 , 0)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else if (loss_bonus_left == 3) {
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("border", "2px solid rgb(236,236,236)");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("background", "rgba(236,236,236 , 0)");
    } else {
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("border", "none");
        $(".LossBonus_A>.bonus_boxes>.bonus_box_1").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_2").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_3").css("background-image", left_color);
        $(".LossBonus_A>.bonus_boxes>.bonus_box_4").css("background-image", left_color);
    }


    /* LOSS BONUS FINITO*/

    /* EQUIPMENT MONEY START*/

    // $(".Team_A").css("border", "3px solid rgb("+ left_color+")");
    // $(".Spam_A").css("border", "3px solid rgb("+ left_color+")");

    // $(".Team_B").css("border", "3px solid rgb("+ right_color+")");
    // $(".Spam_B").css("border", "3px solid rgb("+ right_color+")");

    $(".Team_A>.TeamMoney>.Lower_Container>.txt").html("$" + left_team_value);
    $(".Team_A>.EquipValue>.Lower_Container>.txt").html("$" + left.equip_value);
    $(".LossBonus_A>.Lower_Container>.txt").html("$" + money_bonus_left);

    $(".Team_B>.TeamMoney>.Lower_Container>.txt").html("$" + right_team_value);
    $(".Team_B>.EquipValue>.Lower_Container>.txt").html("$" + right.equip_value);
    $(".LossBonus_B>.Lower_Container>.txt").html("$" + money_bonus_right);

    $(".Team_A>.LossBonus>.Upper_Container").css("background-image", left_color);
    $(".Team_A>.TeamMoney>.Upper_Container").css("background-image", left_color);
    $(".Team_A>.EquipValue>.Upper_Container").css("background-image", left_color);

    $(".Team_B>.LossBonus>.Upper_Container").css("background-image", right_color);
    $(".Team_B>.TeamMoney>.Upper_Container").css("background-image", right_color);
    $(".Team_B>.EquipValue>.Upper_Container").css("background-image", right_color);

    $(".topbar_container>.topbar_i_counter>.line1").css("background-image", left_color);
    $(".topbar_container>.topbar_i_counter>.line2").css("background-image", right_color);

    // $(".Team_A>.LossBonus>.Lower_Container>.txt").css("color", "rgb("+left_color+")");
    // $(".Team_A>.TeamMoney>.Lower_Container>.txt").css("color", "rgb("+left_color+")");
    // $(".Team_A>.EquipValue>.Lower_Container>.txt").css("color", "rgb("+left_color+")");
    // $(".Team_B>.LossBonus>.Lower_Container>.txt").css("color", "rgb("+right_color+")");
    // $(".Team_B>.TeamMoney>.Lower_Container>.txt").css("color", "rgb("+right_color+")");
    // $(".Team_B>.EquipValue>.Lower_Container>.txt").css("color", "rgb("+right_color+")");

    var total_rounds = teams.left.score + teams.right.score;
    var total = total_rounds + 1;

    var videos_txt = ["../../sponsors/1.webm", "../../sponsors/2.webm", "../../sponsors/3.webm"];
    var videos_length = [14, 16, 15, 15];

    

    if (observed.steamid == 1 || !observed) {

        $(".observed_container").css("transition", "all 0.3s ease 0s").css("transform", "translateY(80px)");
        $(".observed_container").css("transition", "all 0.3s ease 0s").css("opacity", "0");
        $(".observed_container>.photo_container").css("opacity", "0");
        $(".bigger_sponsor").css("opacity", "0");
        $(".bigger_sponsor").css("transition", "all 0.2s ease 0s").css("transform", "translateY(300px)");
        $(".sponsor").css("transition", "all 0.3s ease 0s").css("transform", "translateY(0px)");
        $(".bigger_sponsor>.inner").html("");
    } else if (observed) {

        menu = (data.info.player.activity == "menu");
        $(".observed_container").css("transition", "all 0.3s ease 0.0s").css("transform", "translateY(0px)");
        $(".observed_container").css("transition", "all 0.3s ease 0s").css("opacity", "1");
        $(".observed_container>.photo_container").css("opacity", "1");
        $(".bigger_sponsor").css("opacity", "0");
        $(".bigger_sponsor").css("transition", "all 0.3s ease 0.0s").css("transform", "translateY(300px)");
        $(".sponsor").css("transition", "all 0.3s ease 0.0s").css("transform", "translateY(0px)");
        $(".bigger_sponsor>.inner").html("");

    }




    if (total_rounds < 24) {
        for (i = 0; i <= 15; i++) {
            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
        }
    } else {
        for (i = 0; i <= 15; i++) {
            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + i + ">.Result").css("background-image", "none");
            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + i + ">.Result").css("background-image", "none");
        }
        for (i = 1; i <= 15; i += 2) {
            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
        }
    }

    if (total_rounds < 12) {
        $(".round_text").html("ROUND  " + round_now + "/24");
        $(".Game_History>.History_Text>.Text").html("GAME HISTORY - 1<sup>ST</sup> HALF");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "0");
    } else if (total_rounds < 24) {
        $(".round_text").html("ROUND  " + round_now + "/30");
        $(".Game_History>.History_Text>.Text").html("GAME HISTORY - 2<sup>ND</sup> HALF");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "0");
    } else if (total_rounds < 30) {
        $(".round_text").html("ROUND  " + round_now + "/36");
        $(".Game_History>.History_Text>.Text").html("GAME HISTORY - 1<sup>ST</sup> OVERTIME");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 36) {
        $(".round_text").html("ROUND  " + round_now + "/42");
        $(".Game_History>.History_Text>.Text").html("GAME HISTORY - 2<sup>ND</sup> OVERTIME");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 42) {
        $(".round_text").html("ROUND  " + round_now + "/48");
        $(".Game_History>.History_Text>.Text").html("GAME HISTORY - 3<sup>RD</sup> OVERTIME");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 48) {
        $(".round_text").html("ROUND  " + round_now + "/54");
        $(".Game_History>.History_Text>.Text").html("GAME HISTORY - 4<sup>TH</sup> OVERTIME");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 54) {
        $(".round_text").html("ROUND  " + round_now + "/60");
        $(".Game_History>.History_Text>.Text").html("GAME HISTORY - 5<sup>TH</sup> OVERTIME");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else {
        $(".round_text").html("ROUND  " + round_now + "/60");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "0");
        $(".Game_History>.History_Text").css("opacity", "0");
        $(".Game_History>.History_Bar").css("opacity", "0");
    }


    var flag = 0;
    var z = 0;
    var y = 0;
    for (i = 0; i < total_rounds; i++) {
        if (total_rounds < 12) {
            nr = i + 1;
            if (nr < 12) {
                if (round_wins[nr].startsWith('ct_')) {
                    if (round_wins[nr].startsWith('ct_win_elimination')) {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                    } else if (round_wins[nr].startsWith('ct_win_defuse')) {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                    } else if (round_wins[nr].startsWith('ct_win_time')) {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                    }
                } else {
                    $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "none");
                }

                if (round_wins[nr].startsWith('t_')) {
                    if (round_wins[nr].startsWith('t_win_elimination')) {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                    } else if (round_wins[nr].startsWith('t_win_bomb')) {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                    }
                } else {
                    $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "none");
                }
            }
        } else if (total_rounds < 24) {
            nr = i + 1;
            z = nr - 12;
            if (nr >= 12) {
                if (round_wins[nr].startsWith('ct_')) {
                    if (round_wins[nr].startsWith('ct_win_elimination')) {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                    } else if (round_wins[nr].startsWith('ct_win_defuse')) {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                    } else if (round_wins[nr].startsWith('ct_win_time')) {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                    }
                } else {
                    $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                }

                if (round_wins[nr].startsWith('t_')) {
                    if (round_wins[nr].startsWith('t_win_elimination')) {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                    } else if (round_wins[nr].startsWith('t_win_bomb')) {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                    }
                } else {
                    $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                }
            }
        } else if (total_rounds < 30) {
            nr = i + 1
            y = nr - 24;

            if (nr == 25) z = 1;
            if (nr == 26) z = 2;
            if (nr == 27) z = 3;
            if (nr == 28) z = 10;
            if (nr == 29) z = 11;
            if (nr == 30) z = 12;
            if (nr > 24) {
                if (y <= 3) {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                } else {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                }
            }
        } else if (total_rounds < 36) {
            nr = i + 1
            y = nr - 30;

            if (nr == 30) z = 1;
            if (nr == 31) z = 2;
            if (nr == 32) z = 3;
            if (nr == 33) z = 10;
            if (nr == 34) z = 11;
            if (nr == 35) z = 12;
            if (nr > 30) {
                if (y <= 3) {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                } else {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                }
            }
        } else if (total_rounds < 42) {
            nr = i + 1
            y = nr - 36;

            if (nr == 37) z = 1;
            if (nr == 38) z = 2;
            if (nr == 39) z = 3;
            if (nr == 40) z = 10;
            if (nr == 41) z = 11;
            if (nr == 42) z = 12;
            if (nr > 36) {
                if (y <= 3) {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                } else {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                }
            }
        } else if (total_rounds < 48) {
            nr = i + 1
            y = nr - 42;

            if (nr == 43) z = 1;
            if (nr == 44) z = 2;
            if (nr == 45) z = 3;
            if (nr == 46) z = 10;
            if (nr == 47) z = 11;
            if (nr == 48) z = 12;
            if (nr > 42) {
                if (y <= 3) {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                } else {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                }
            }
        } else if (total_rounds < 54) {
            nr = i + 1
            y = nr - 48;

            if (nr == 49) z = 1;
            if (nr == 50) z = 2;
            if (nr == 51) z = 3;
            if (nr == 52) z = 10;
            if (nr == 53) z = 11;
            if (nr == 64) z = 12;
            if (nr > 48) {
                if (y <= 3) {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                } else {
                    if (round_wins[y].startsWith('ct_')) {
                        if (round_wins[y].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[y].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[y].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[y].startsWith('t_')) {
                        if (round_wins[y].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[y].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                }

            }
        } else {
            $(".Game_History>.History_Text").css("opacity", "0");
            $(".Game_History>.History_Bar").css("opacity", "0");
        }
    }


    $(".bo5_container>.background").css("background", "linear-gradient(to right, rgba("+left_color+",0.4) , rgba("+right_color+",0.4))");
    $(".bo5_container>.container").css("border-width", "2px");
    $(".bo5_container>.container").css("border-style", "solid");
    $(".bo5_container>.container").css("border-image","linear-gradient(to right,rgb("+left_color+") , rgb("+right_color+")) 1");


    $(".center_inner_back").css("border-top", "solid 3px rgb(255,255,255)");


    $(".center_inner_back_2").css("border-top", "solid 3px rgb(255,255,255)");

    $(".giveaway>.glow").css("border", "solid 3px rgb(255,255,255)");


    
    bigger_sponsor_background += 5;
    if(bigger_sponsor_background > 360){
        bigger_sponsor_background = 0;
    }
    // console.log(bigger_sponsor_background);
    // $(".bigger_sponsor").css("background", "linear-gradient("+bigger_sponsor_background+"deg, rgba("+ left_color +") 0%, rgba("+ left_color +") 10%,  rgb(0,0,0) 50% ,rgba("+ right_color +") 90%, rgb("+ right_color +") 100%)");
    // LEFT


    var left_gradient_spam = "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(" + left_color + ", 0.2) 35%, rgba(" + left_color + ", 0.2) 65%, rgba(0, 0, 0, 0) 100%)";


    $(".Progress_Bar>.Left_Team>.Background").css("background", "rgb(0,0,0)");
    $(".Progress_Bar>.Left_Team>.Progress").css("background-image", left_color);

    $(".Progress_Bar>.Right_Team>.Background").css("background", "rgb(0,0,0)");
    $(".Progress_Bar>.Right_Team>.Progress").css("background-image", right_color);



    var right_gradient_spam = "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(" + right_color + ", 0.2) 35%, rgba(" + right_color + ", 0.2) 65%, rgba(0, 0, 0, 0) 100%)";

    $(".Spam_A>.Spam_BG>.Progress").css("background-image", left_color);
    $(".Spam_B>.Spam_BG>.Progress").css("background-image", right_color);
    // $(".Spam_A>.Spam_SM>.Text_Box").css("background", " linear-gradient( 0deg, rgba(" + dark_left_color + ",1) 0%, rgba(" + left_color + ",1) 100%)");
    // $(".Spam_B>.Spam_SM>.Text_Box").css("background", " linear-gradient( 0deg, rgba(" + dark_right_color + ",1) 0%, rgba(" + right_color + ",1) 100%)");

    $(".LossBonus_A>.Upper_Container").css("background-image", left_color);
    $(".LossBonus_B>.Upper_Container").css("background-image", right_color);

    $(".topbar_i_counter>.player_count_left>.left_count").css("background-image", left_color);
    $(".topbar_i_counter>.player_count_left>.left_count").css("-webkit-background-clip", "text");
    $(".topbar_i_counter>.player_count_left>.left_count").css("-webkit-text-fill-color", "transparent");

    $(".topbar_i_counter>.player_count_right>.right_count").css("background-image", right_color);
    $(".topbar_i_counter>.player_count_right>.right_count").css("-webkit-background-clip", "text");
    $(".topbar_i_counter>.player_count_right>.right_count").css("-webkit-text-fill-color", "transparent");




    if (teams.left.score > 9) {
        $(".left_score").html(teams.left.score);
    } else {
        $(".left_score").html("0" + teams.left.score);
    }

    if (teams.right.score > 9) {
        $(".right_score").html(teams.right.score);
    } else {
        $(".right_score").html("0" + teams.right.score);
    }


    // Update Molo Spam


    if (teams.left.side == "ct") {
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_CTMolo.png")');
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "12px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "1px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "13px");


        
    } else if (teams.left.side == "t") {
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_TMolo.png")');
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "21px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "0px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "10px");



    }

    if (teams.right.side == "ct") {
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_CTMolo.png")');
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "12px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "1px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "13px");

;
        

    } else if (teams.right.side == "t") {
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_TMolo.png")');
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "21px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "0px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "10px");


    }

    // Update Logos

    //EVERY OTHER PLAYER
    if (players) {

        var offset = 0;
        for (var sl in players) {
            let player = players[sl];
            if (avatars[player.steamid] != true && disp_avatars)
                loadAvatar(player.steamid);

            if (player.observer_slot <= 5 && offset == 0 && player.team.toLowerCase() != teams.left.side)
                offset = 6 - sl;
        }
        fillPlayers(teams);

    }

    //OBSERVED PLAYER

    if (observed && observed.steamid != 1 && observed.getStats()) {
        fillObserved(observed);
    }


    //PHASESc
    if (phase) {
        $(".time").css("color", (phase.phase == "live" || phase.phase == "over" || phase.phase == "warmup" || (phase.phase == "freezetime" && phase.phase_ends_in > 10)) ?
            "rgb(255, 255, 255)" :
            "rgb(" + warning + ")");
        if (phase.phase == "live" || phase.phase == "over" || phase.phase == "warmup" || (phase.phase == "freezetime" && phase.phase_ends_in > 10)) {
            $(".time").css("color", "rgb(255, 255, 255)");
            $(".time").css("background-image", '');
            $(".time").css("-webkit-background-clip", "");
            $(".time").css("-webkit-text-fill-color", "");
        } else {
            $(".time").css("color", "");   
            $(".time").css("background-image", 'radial-gradient(circle at 50% -20.71%, rgb(248, 187, 0) 0px, rgb(244, 169, 0) 16.67%, rgb(236, 149, 12) 33.33%, rgb(224, 128, 21) 50%, rgb(210, 108, 27) 66.67%, rgb(197, 90, 31) 83.33%, rgb(185, 75, 35) 100%)');
            $(".time").css("-webkit-background-clip", "text");
            $(".time").css("-webkit-text-fill-color", "transparent");
        }

        function startAnimationDefuse(name, side, long) {

            if (data.info.bomb.countdown > 0.1) {
                defuse_countdown = data.info.bomb.countdown - 0.1;
            } else if (data.info.bomb.countdown <= 0.1) {
                defuse_countdown = 0.0;
            }

            if (defuse_countdown < 0.1) {
                $(".bomb").html("");
                $(".bomb").css("animation", "");
            }


            progress_width = defuse_countdown * 100 / 10 + "%";
            $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");

            if ($(".Progress_Bar>.Center_Bar").hasClass("longd")) {
                if (data.info.bomb.countdown < 9.80) {
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                    if (side == "left") {
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(defuse_name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0.8").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                    } else {
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(defuse_name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0.8").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                    }
                }
            } else {
                if (data.info.bomb.countdown < 4.80) {
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                    if (side == "left") {
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                    } else {
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                    }
                } else if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "DEFUSING BOMB") {
                    if (side == "left") {
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                    } else {
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("DEFUSING BOMB");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                    }
                }
            }

        }


        function stopAnimationDefuse() {

                if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "DEFUSING BOMB") {
                    if (teams.left.side == "ct") {
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                    } else if (teams.right.side == "ct") {
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                    }
                }
        }

        function startAnimationPlanting(name, side) {

            var countdown = parseFloat(3.2) - parseFloat(data.info.bomb.countdown);
            countdown = countdown.toFixed(1);
            var progress_width = countdown * 100 / 3 + "%";

            if ($(".Progress_Bar>.Left_Team>.Progress").html() !== 1) {
                if (side == "left") {
                    $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/bomb_Img.png");
                    $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                    $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                    var plant_name = name;
                    if (plant_name.length > 13) plant_name = plant_name.substring(0, 13);
                    $(".Progress_Bar>.Center_Bar>.Player_Txt").html(plant_name);
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("PLANTING BOMB");
                    $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.4s ease 0s");
                    $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.4s ease 0.1s");
                    $(".Progress_Bar>.Left_Team>.Progress").css("width", "100%").css("transition", "all 3.5s ease 0s");
                    $(".Progress_Bar>.Left_Team>.Progress>.Number").html(1);
                } else {
                    $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/bomb_Img.png");
                    $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                    $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                    var plant_name = name;
                    if (plant_name.length > 13) plant_name = plant_name.substring(0, 13);
                    $(".Progress_Bar>.Center_Bar>.Player_Txt").html(plant_name);
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("PLANTING BOMB");
                    $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.4s ease 0s");
                    $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.4s ease 0.1s");
                    $(".Progress_Bar>.Right_Team>.Progress").css("width", "100%").css("transition", "all 3.5s ease 0s");
                    $(".Progress_Bar>.Right_Team>.Progress>.Number").html(1);
                }
            }
        }

        function stopAnimationPlanting() {

            setTimeout(function() {
                if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "PLANTING BOMB") {
                    if (teams.left.side == "t") {
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.8s ease 0.3s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                        $(".Progress_Bar>.Left_Team>.Progress>.Number").html("");
                    } else if (teams.right.side == "t") {
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.8s ease 0.3s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                        $(".Progress_Bar>.Left_Team>.Progress>.Number").html("");
                    }
                }
            }, 200);

        }

        if (data.info.bomb.state == "planting") {

            var plantador;

            if (players) {

                var offset = 0;
                for (var sl in players) {
                    let player = players[sl];
                    if (player.steamid == data.info.bomb.player)
                        plantador = player.name;
                }
            }

            if (teams.left.side == "t") {
                if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
                    plantador = plantador.slice(letters);
                } 
                startAnimationPlanting(plantador, "left");
            } else if (teams.right.side == "t") {
                if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
                    plantador = plantador.slice(letters);
                } 
                startAnimationPlanting(plantador, "right");

            }


        } else {
            stopAnimationPlanting();
        }



        if (phase.phase == "bomb" || phase.phase == "defuse") {
            if (phase.phase == "bomb") {
                bomb(parseFloat(phase.phase_ends_in));
            }

            if (data.info.bomb.state == "defusing") {

                var defuser;
                var long;

                if (players) {

                    var offset = 0;
                    for (var sl in players) {
                        let player = players[sl];
                        if (player.steamid == data.info.bomb.player)
                            defuser = player.name;
                    }
                }


                if (teams.left.side == "ct") {
                    if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
                        defuser = defuser.slice(letters);
                    } 
                    if (data.info.bomb.countdown > 6.1) {
                        $(".Progress_Bar>.Center_Bar").addClass("longd");
                        startAnimationDefuse(defuser, "left");
                    } else {
                        $(".Progress_Bar>.Center_Bar").removeClass("longd");
                        startAnimationDefuse(defuser, "left");
                    }
                } else if (teams.right.side == "ct") {
                    if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
                        defuser = defuser.slice(letters);
                    } 
                    if (data.info.bomb.countdown > 6.1) {
                        $(".Progress_Bar>.Center_Bar").addClass("longd");
                        startAnimationDefuse(defuser, "right");
                    } else {
                        $(".Progress_Bar>.Center_Bar").removeClass("longd");
                        startAnimationDefuse(defuser, "right");
                    }

                }

            } else {
                stopAnimationDefuse();
            }

        } else {
            resetBomb();
            stopAnimationDefuse();
            stopAnimationDefuse();
        }

        if (data.info.bomb.state == "defused") {
            stopAnimationDefuse();
        }

        let win = round.win_team;

        var rightside = teams.right.side;
        rightside = rightside.toUpperCase();

        var leftside = teams.left.side;
        leftside = leftside.toUpperCase();

        //WINNER ANIMATION

        function startAnimationWinner(side, name, gameside) {

            if (side == "left") {
                $(".win_container_left").css("transform", "translateX(0px)").css("transition", "all 0.6s ease 0.1s");
                $(".win_container_left").css("opacity", "1");
                $(".win_text_left").css("opacity", "1").css("transition", "all 0.4s ease 0s");
            } else if (side == "right") {
                $(".win_container_right").css("transform", "translateX(0px)").css("transition", "all 0.6s ease 0.1s");
                $(".win_container_right").css("opacity", "1");
                $(".win_text_right").css("opacity", "1").css("transition", "all 0.4s ease 0s");
            }

        }

        function stopAnimationWinner() {

            $(".win_container_left").css("transform", "translateX(270px)").css("transition", "all 0.8s ease 0.4s");
            $(".win_container_right").css("transform", "translateX(-270px)").css("transition", "all 0.8s ease 0.4s");
            $(".win_container_left").css("opacity", "0");
            $(".win_container_right").css("opacity", "0");
            $(".win_text_right").css("opacity", "0").css("transition", "all 1s ease 0.6s");
            $(".win_text_left").css("opacity", "0").css("transition", "all 1s ease 0.6s");
        }

        // SHOW SPAM & FIREPOWER

        function showBO(){
            $(".bo5_container").removeClass("hide_bo_container").addClass("show_bo_container");
        }
        function hideBO(){
            $(".bo5_container").removeClass("show_bo_container").addClass("hide_bo_container");
        }

        function showSpam() {
            $(".Spam_A>.Spam_BG").removeClass("hide_spam_left").addClass("show_spam");
            $(".Spam_B>.Spam_BG").removeClass("hide_spam_right").addClass("show_spam");
            $(".Spam_A>.Spam_SM").removeClass("hide_spam_left").addClass("show_spam");
            $(".Spam_B>.Spam_SM").removeClass("hide_spam_right").addClass("show_spam");
        }

        function hideSpam() {
            $(".Spam_A>.Spam_BG").removeClass("show_spam").addClass("hide_spam_left");
            $(".Spam_B>.Spam_BG").removeClass("show_spam").addClass("hide_spam_right");
            $(".Spam_A>.Spam_SM").removeClass("show_spam").addClass("hide_spam_left");
            $(".Spam_B>.Spam_SM").removeClass("show_spam").addClass("hide_spam_right");
        }

        function showGiveaway() {
            $(".giveaway").removeClass("hide_giveaway").addClass("show_giveaway");
        }

        function hideGiveaway() {
            $(".giveaway").removeClass("show_giveaway").addClass("hide_giveaway");
        }


        function showBonus() {
            $(".LossBonus_A").removeClass("hide_spam_left").addClass("show_spam");
            $(".LossBonus_B").removeClass("hide_spam_right").addClass("show_spam");
            $(".Team_A").removeClass("hide_bonus_right").addClass("show_bonus");
            $(".Team_B").removeClass("hide_bonus_left").addClass("show_bonus");
            // $(".Game_History").css("transition", "all 1s ease-out 0.5s").css("transform", "translate(0px, 0px)");
            $(".Game_History>.History_Text").css("transition", "all 0.5s ease 0s").css("transform", "translate(0px, 0px)");
            $(".Game_History>.History_Text").css("opacity", "1");
            $(".Game_History>.History_Bar").css("transition", "all 0.6s ease 0.5s").css("transform", "translate(0px, 0px)");
            $(".Game_History>.History_Bar").css("opacity", "1");
        }

        function hideBonus() {
            $(".LossBonus_A").removeClass("show_spam").addClass("hide_spam_left");
            $(".LossBonus_B").removeClass("show_spam").addClass("hide_spam_right");
            $(".Team_A").removeClass("show_bonus").addClass("hide_bonus_right");
            $(".Team_B").removeClass("show_bonus").addClass("hide_bonus_left");
            $(".Game_History>.History_Text").css("transition", "all 1.1s ease 0.6s").css("transform", "translate(0px, -85px)");
            $(".Game_History>.History_Text").css("opacity", "0");
            $(".Game_History>.History_Bar").css("transition", "all 0.6s ease 0.4s").css("transform", "translate(0px, -85px)");
            $(".Game_History>.History_Bar").css("opacity", "0");
        }


        function showPickem() {
            $(".MapPick_BG").removeClass("hide_pickem").addClass("show_pickem");
        }

        function hidePickem() {
            $(".MapPick_BG").removeClass("show_pickem").addClass("hide_pickem");
        }

        function showPickem_1() {
            $(".MapPick_BG>.Map1").removeClass("hide_pickem_1").addClass("show_pickem_1");
        }

        function hidePickem_1() {
            $(".MapPick_BG>.Map1").removeClass("show_pickem_1").addClass("hide_pickem_1");
        }

        function showPickem_2() {
            $(".MapPick_BG>.Map2").removeClass("hide_pickem_2").addClass("show_pickem_2");
        }

        function hidePickem_2() {
            $(".MapPick_BG>.Map2").removeClass("show_pickem_2").addClass("hide_pickem_2");
        }

        function showFirePower() {
            $(".firepower").removeClass("hide_firepower").addClass("show_firepower");
            $(".header_container>.team_equip_right").css("opacity", "1");
            $(".header_container>.team_money_right").css("opacity", "1");
            $(".header_container>.team_equip_left").css("opacity", "1");
            $(".header_container>.team_money_left").css("opacity", "1");
            $(".header_container>.team_equip_right").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            $(".header_container>.team_money_right").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            $(".header_container>.team_equip_left").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            $(".header_container>.team_money_left").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            // $(".header_container>.left_name").css("opacity", "0");
            // $(".header_container>.right_name").css("opacity", "0");
            if (flag == 0) {
                $(".round_winner").removeClass("hide_round_winner").addClass("show_round_winner");
            }
        }

        function hideFirePower() {
            $(".header_container>.left_name").css("opacity", "1");
            $(".header_container>.right_name").css("opacity", "1");
            $(".firepower").removeClass("show_firepower").addClass("hide_firepower");
            $(".header_container>.team_equip_right").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(-74px, 0px)");
            $(".header_container>.team_money_right").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(74px, 0px)");
            $(".header_container>.team_equip_left").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(74px, 0px)");
            $(".header_container>.team_money_left").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(-74px, 0px)");
            $(".header_container>.team_equip_right").css("opacity", "0");
            $(".header_container>.team_money_right").css("opacity", "0");
            $(".header_container>.team_equip_left").css("opacity", "0");
            $(".header_container>.team_money_left").css("opacity", "0");
            if (flag == 0) {
                $(".round_winner").removeClass("show_round_winner").addClass("hide_round_winner");
            }
            // $(".Game_History").removeClass("hide_history").addClass("show_history");
        }






        if (map.phase == "intermission" || map.phase == "warmup" || map.phase == "gameover") {
            stopAnimationWinner();
        }

        if (round.phase == "over") {
            if (phase.phase_ends_in > 1) {

                if (win == rightside) {
                    startAnimationWinner("right", teams.right.name, teams.right.side);
                } else if (win == leftside) {
                    startAnimationWinner("left", teams.left.name, teams.left.side);
                }
            } else {
                stopAnimationWinner();
            }

        } else {
            stopAnimationWinner();
        }


        if (phase.phase == "freezetime") {

            stopAnimationWinner();
            if (phase.phase_ends_in > 1) {
                showSpam();
                showBonus();
                hideBO();
                if (bo == 1) {
                    //showPickem();
                    //$(".MapPick_BG>.Map1").css("opacity", "0");
                    //$(".MapPick_BG>.Map2").css("opacity", "0");
                } else if (bo == 3) {
                    showPickem_1();
                    showPickem_2();
                    showPickem();
                }
                showFirePower();
                hideGiveaway();
            } else {
                showSpam();
                hideBonus();
                if (bo == 1) {
                    //hidePickem();
                } else if (bo == 3) {
                    hidePickem_1();
                    hidePickem_2();
                    hidePickem();
                }
                if ((round_now % 3) == 0) {
                    showGiveaway();
                }
                hideFirePower();
                showBO();
            }

        }

        if (phase.phase == "live" && phase.phase !== "bomb") {
            if (phase.phase_ends_in > 104) {
                if ($(".Spam_A>.Spam_BG").css("opacity") == 0 && $(".Spam_B>.Spam_BG").css("opacity") == 0) {
                    showSpam();
                    showGiveaway();
                    // showTeamName();
                }
            } else {
                if ($(".Spam_A>.Spam_BG").css("opacity") == 1 && $(".Spam_B>.Spam_BG").css("opacity") == 1) {
                    hideGiveaway();
                    hideSpam();
                    // hideTeamName();
                }
            }
        }



        if (phase.phase == "bomb" && bomb_time > "30") {
            showSpam();
        } else if (phase.phase == "bomb" && phase.phase_ends_in < 30 && ($(".spam > .left_container").css("opacity") == 1 && $(".spam > .right_container").css("opacity") == 1)) {
            hideSpam();
        }

        if (phase.phase == "over") {
            hideSpam();
        }

        var pause_now_left = 5 - teams.left.timeouts;
        var pause_now_right = 5 - teams.right.timeouts;

        // Update Timer 
        console.log(pause_now_right);

        if (phase.phase_ends_in) {

            function startAnimationPause(remaining, side) {

                hideFirePower();

                var progress_width = phase.phase_ends_in * 100 / 30 + "%";

                $(".Top_Bar>.Timer_BG>.Timer").text(count_minute + ":" + count_seconds);
                if (side == "left") {
                    $(".header_container>.Pause_Left>.Pause_Text").html("TACTICAL PAUSE");
                    if (pause_now_left == 3) {
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("border", "solid 2px rgb(246,246,246)");
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("border", "solid 2px rgb(246,246,246)");
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_3").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_3").css("border", "solid 2px rgb(246,246,246)");
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_4").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_4").css("border", "solid 2px rgb(246,246,246)");
                    }
                    if (pause_now_left == 2) {
                        $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("border", "solid 2px "+left_color_hexa +"");
                    } else if (pause_now_left == 1) {
                        $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("border", "solid 2px "+left_color_hexa +"");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("border", "solid 2px "+left_color_hexa +"");
                    } else if (pause_now_left == 0) {
                        $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("border", "solid 2px "+left_color_hexa +"");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("border", "solid 2px "+left_color_hexa +"");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_3").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_3").css("border", "solid 2px "+left_color_hexa +"");
                    } else if (pause_now_left == 4) {
                        $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_1").css("border", "solid 2px "+left_color_hexa +"");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_2").css("border", "solid 2px "+left_color_hexa +"");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_3").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_3").css("border", "solid 2px "+left_color_hexa +"");
                        $(".header_container>.Pause_Left>.Lower_container>.pause_4").css("background-image", left_color);
                        // $(".header_container>.Pause_Left>.Lower_container>.pause_4").css("border", "solid 2px "+left_color_hexa +" ");
                    }
                    $(".header_container>.Pause_Left").css("transition", "opacity 1s ease 0s").css("opacity", "1");
                    $(".header_container>.Pause_Left>.Lower_container").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translate(0px, 0px)");
                    $(".pause_container_left").css("transition", "all 0.4s ease-out 0.1s").css("opacity", "1");
                    $(".pause_container_left").css("transition", "all 0.4s ease-out 0.1s").css("transform", "translate(0px, 0px)");

                } else if (side == "right") {
                    $(".header_container>.Pause_Right>.Pause_Text").html("TACTICAL PAUSE");
                    $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("border", "solid 2px rgb(246,246,246)");
                    $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("border", "solid 2px rgb(246,246,246)");
                    $(".header_container>.Pause_Right>.Lower_container>.pause_3").css("border", "solid 2px rgb(246,246,246)");
                    $(".header_container>.Pause_Right>.Lower_container>.pause_4").css("border", "solid 2px rgb(246,246,246)");
                    if (pause_now_right == 3) {
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("border", "solid 2px rgb(246,246,246)");
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("border", "solid 2px rgb(246,246,246)");
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_3").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_3").css("border", "solid 2px rgb(246,246,246)");
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_4").css("background", "rgb(246,246,246)");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_4").css("border", "solid 2px rgb(246,246,246)");
                    }
                    if (pause_now_right == 2) {
                        $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("background-image", right_color);
                        $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("border", "solid 2px ");
                    } else if (pause_now_right == 1) {
                        $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("border", "solid 2px "+right_color_hexa +"");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("border", "solid 2px "+right_color_hexa +"");
                    } else if (pause_now_right == 0) {
                        $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("border", "solid 2px "+right_color_hexa +"");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("border", "solid 2px "+right_color_hexa +"");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_3").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_3").css("border", "solid 2px "+right_color_hexa +"");
                    } else if (pause_now_right == 4) {
                        $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_1").css("border", "solid 2px "+right_color_hexa +"");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_2").css("border", "solid 2px "+right_color_hexa +"");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_3").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_3").css("border", "solid 2px "+right_color_hexa +"");
                        $(".header_container>.Pause_Right>.Lower_container>.pause_4").css("background-image", right_color);
                        // $(".header_container>.Pause_Right>.Lower_container>.pause_4").css("border", "solid 2px "+right_color_hexa +"");
                    }
                    $(".header_container>.Pause_Right").css("transition", "opacity 1s ease 0s").css("opacity", "1");
                    $(".header_container>.Pause_Right>.Lower_container").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translate(0px, 0px)");
                    $(".pause_container_right").css("transition", "all 0.4s ease-out 0.1s").css("opacity", "1");
                    $(".pause_container_right").css("transition", "all 0.4s ease-out 0.1s").css("transform", "translate(0px, 0px)");
                }
            }

            function stopAnimationPause(side) {
                        $(".header_container>.Pause_Left").css("transition", "opacity 0.8s ease 0.5s").css("opacity", "0");
                        $(".header_container>.Pause_Left>.Lower_container").css("transition", "all 0.8s ease-out 0.5s").css("transform", "translate(0px, -26px)");
                        $(".pause_container_left").css("transition", "all 1.2s ease-out 0.9s").css("opacity", "0");
                        $(".pause_container_left").css("transition", "all 1.2s ease-out 0.9s").css("transform", "translateX(250px)");
                        $(".header_container>.Pause_Right").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                        $(".header_container>.Pause_Right>.Lower_container").css("transition", "all 0.8s ease-out 0.5s").css("transform", "translate(0px, -26px)");
                        $(".pause_container_right").css("transition", "all 1.2s ease-out 0.9s").css("opacity", "0");
                        $(".pause_container_right").css("transition", "all 1.2s ease-out 0.9s").css("transform", "translateX(-250px)");
            }

            var countdown = Math.abs(Math.ceil(phase.phase_ends_in));
            var count_minute = Math.floor(countdown / 60);
            var count_seconds = countdown - (count_minute * 60);
            let bomb_active = false;
            if (count_seconds < 10) {
                count_seconds = "0" + count_seconds;
            }

            if (phase.phase == "bomb" && bomb_time > "9" || phase.phase == "defuse") {
                $(".time").html("");

                var progressbomb_time = bomb_time * 100 / 40;
                progressbomb_time = progressbomb_time + "%";
                bomb_active = true;
                if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "PLANTING BOMB") {
                    if (teams.left.side == "t") {
                        $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                        $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.8s ease 0.3s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".header_container>.bomb_countdown_container>.background").css("height", "0px").css("transition", "height 40s linear 0s");
                        $(".header_container>.bomb_countdown_container>.bomb").css("animation", "pulseA 40s ease-in-out forwards"); 
                        $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease-out 0s").css("opacity", "1");
                    } else if (teams.right.side == "t") {
                        $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                        $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.8s ease 0.3s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".header_container>.bomb_countdown_container>.background").css("height", "0px").css("transition", "height 40s linear 0s");
                        $(".header_container>.bomb_countdown_container>.bomb").css("animation", "pulseA 40s ease-in-out forwards"); 
                        $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease-out 0s").css("opacity", "1");
                    }
                }
                // $(".header_container>.bomb_countdown_container>.background").css("height", "0px").css("transition", "height 40s linear 0s");
                // $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease-out 0s").css("opacity", "1");
            } else if (phase.phase == "bomb" && bomb_time <= "9.99999" && bomb_time >= "0") {
                $(".time").html("");
                var progressbomb_time = bomb_time * 100 / 40 + "%";

            } else if (phase.phase == "paused" || phase.phase == "timeout_ct" || phase.phase == "timeout_t") {
                stopAnimationWinner();
                $(".Progress_Bar>.Left_Team>.Progress").html("");
                $(".header_container>.bomb_countdown_container>.bomb").css("animation", "");
                $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                if (data.info.bomb.state !== "planting") {
                    $(".Progress_Bar>.Left_Team>.Progress").css("width", "0px");
                    $(".Progress_Bar>.Right_Team>.Progress").css("width", "0px");
                }
                $(".time").text(count_minute + ":" + count_seconds);

                $(".time").css("animation", "");
                if (phase.phase == "timeout_ct" || phase.phase == "timeout_t") {
                    if (phase.phase == "timeout_ct") {
                        if (teams.left.side == "ct") {
                            startAnimationPause(pause_now_left, "left");
                        } else if (teams.right.side == "ct") {
                            startAnimationPause(pause_now_right, "right");
                        }
                    } else if (phase.phase == "timeout_t") {
                        if (teams.left.side == "t") {
                            startAnimationPause(pause_now_left, "left");
                        } else if (teams.right.side == "t") {
                            startAnimationPause(pause_now_right, "right");
                        }
                    }
                } else {
                    $(".time").text("PAUSE");
                    $(".time").css("animation", "");
                    stopAnimationPause();
                    stopAnimationWinner();
                    hideBonus();
                    showGiveaway();
                }
            } else {
                $(".header_container>.bomb_countdown_container>.bomb").css("animation", "");
                $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                if (data.info.bomb.state !== "planting") {
                    $(".Progress_Bar>.Left_Team>.Progress").css("width", "0px");
                    $(".Progress_Bar>.Right_Team>.Progress").css("width", "0px");
                }
                $(".time").text(count_minute + ":" + count_seconds);
                $(".Progress_Bar>.Left_Team>.Progress").html("");

                stopAnimationPause();

                if (data.info.bomb.state !== "planting") {
                    $(".Progress_Bar>.Center_Bar").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                    $(".Progress_Bar>.Left_Team").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                    $(".Progress_Bar>.Right_Team").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                    $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                }

                if (data.info.bomb.state !== "planting") {
                    if (teams.left.side == "t") {
                        $(".Progress_Bar>.Left_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    } else {
                        $(".Progress_Bar>.Right_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    }
                    if (teams.left.side == "ct") {
                        $(".Progress_Bar>.Left_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    } else {
                        $(".Progress_Bar>.Right_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    }
                }

                if (map.phase == "warmup") {
                    $(".time").text("WARMUP");
                    $(".time").css("animation", "");
                    stopAnimationPause();
                    stopAnimationWinner();
                    $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                    $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                }
            }

        }

    }
    freezetime = round.phase == "freezetime";
    last_round = round_now;

}