var teamsOverall;
var playersOverall;
var bottom_sponsorsOverall;
var top_sponsorsOverall;

function addTeam(team){
    $.ajax({
        type: "POST",
        url: "/api/teams",
        data: team,
        cache:false,
        contentType:false,
        processData:false,
        success: function(res){
            listTeams(res.id)
        }
    });
}

function deleteTeam(teamId){
    $.ajax({
        type: "DELETE",
        url: "/api/teams",
        data: {teamId:teamId},
        success: function(res){
            listTeams();
            loadTeam();
            $("#delete_team").addClass("disabled")
        }
    });
}

function deleteLogo(teamId){
    $.ajax({
        type: "DELETE",
        url: "/api/teams_logo",
        data: {teamId:teamId},
        success: function(res){
            listTeams(teamId);
            $("#logo_img").attr("src", "").hide();
        }
    });
}

function updateTeam(team, teamId){
    $.ajax({
        type: "PATCH",
        url: "/api/teams",
        data: team,
        cache:false,
        contentType:false,
        processData:false,
        success: function(){
            listTeams(teamId)
        }
    });
}

function listTeams(defaultTeam){

    loadTeams(function(teams){
        $teamList = $("#teams");
        $teamList.html("<option value='default'>New team</option>");

        teams.forEach(function(team, id) {
            let $option = $("<option value='" + id + "'>" + team.team_name + "</option>");
            if(defaultTeam && defaultTeam == team._id) $option.prop("selected","selected");
            $("#teams").append($option);
        }, this);

        $('#teams').formSelect();
    });
}
function loadTeams(callback){
    $.get("/api/teams", function (data) {
        teamsOverall = data.teams;
        callback(teamsOverall);
    });
}

function loadTeam(team){
    $("#team_name").val(team ? team.team_name : "");
    $("#delete_team").removeClass("disabled").addClass(!team ? "disabled" : "");
    $("#id").val(team ? team._id : "");
    $("#team_logo_img").attr("src", (team && team.logo ? "/teams/" + team.logo : "")).hide();
    if(team && team.logo) {
        $("#team_logo_img").show();
    }
}

// --------------------------------- Bottom Sponsors ---------------------------------

function addBottomSponsor(bottom_sponsor){
    $.ajax({
        type: "POST",
        url: "/api/bottom_sponsors",
        data: bottom_sponsor,
        cache:false,
        contentType:false,
        processData:false,
        success: function(res){
            listBottomSponsors(res.id)
        }
    });
}

function deleteBottomSponsor(bottom_sponsorId){
    $.ajax({
        type: "DELETE",
        url: "/api/bottom_sponsors",
        data: {bottom_sponsorId:bottom_sponsorId},
        success: function(res){
            listBottomSponsors();
            loadBottomSponsor();
            $("#delete_bottom_sponsor").addClass("disabled")
        }
    });
}

function deleteBottomLogo(bottom_sponsorId){
    $.ajax({
        type: "DELETE",
        url: "/api/bottom_sponsors",
        data: {bottom_sponsorId:bottom_sponsorId},
        success: function(res){
            listBottomSponsors(bottom_sponsorId);
            $("#bottom_sponsor_logo_img").attr("src", "").hide();
        }
    });
}

function updateBottomSponsor(bottom_sponsor, bottom_sponsorId){
    $.ajax({
        type: "PATCH",
        url: "/api/bottom_sponsors",
        data: bottom_sponsor,
        contentType:false,
        processData:false,
        success: function(){
            listBottomSponsors(bottom_sponsorId)
        }
    });
}

function listBottomSponsors(defaultSponsor){

    loadBottomSponsors(function(bottom_sponsors){
        $bottom_sponsorList = $("#bottom_sponsors");
        $bottom_sponsorList.html("<option value='default'>New Sponsor</option>");

        bottom_sponsors.forEach(function(bottom_sponsor, id) {
            let $option = $("<option value='" + id + "'>" + bottom_sponsor.bottom_sponsor_name + "</option>");
            if(defaultSponsor && defaultSponsor == bottom_sponsor._id) $option.prop("selected","selected");
            $("#bottom_sponsors").append($option);
        }, this);

        $('#bottom_sponsors').formSelect();
    });
}
function loadBottomSponsors(callback){
    $.get("/api/bottom_sponsors", function (data) {
        bottom_sponsorsOverall = data.bottom_sponsors;
        callback(bottom_sponsorsOverall);
    });
}

function loadBottomSponsor(bottom_sponsor){
    $("#bottom_sponsor_name").val(bottom_sponsor ? bottom_sponsor.bottom_sponsor_name : "");
    $("#delete_bottom_sponsor").removeClass("disabled").addClass(!bottom_sponsor ? "disabled" : "");
    $("#id").val(bottom_sponsor ? bottom_sponsor._id : "");
    $("#bottom_sponsor_logo_img").attr("src", (bottom_sponsor && bottom_sponsor.logo ? "/bottom_sponsors/" + bottom_sponsor.logo : "")).hide();
    if(bottom_sponsor && bottom_sponsor.logo) $("#bottom_sponsor_logo_img").show();
}

// ------------------------------------------------------ End Bottom Sponsors ------------------------------------------------------

// --------------------------------- Top Sponsors ---------------------------------

function addTopSponsor(top_sponsor){
    $.ajax({
        type: "POST",
        url: "/api/top_sponsors",
        data: top_sponsor,
        cache:false,
        contentType:false,
        processData:false,
        success: function(res){
            listTopSponsors(res.id)
        }
    });
}

function deleteTopSponsor(top_sponsorId){
    $.ajax({
        type: "DELETE",
        url: "/api/top_sponsors",
        data: {top_sponsorId:top_sponsorId},
        success: function(res){
            listTopSponsors();
            loadTopSponsor();
            $("#delete_top_sponsor").addClass("disabled")
        }
    });
}

function deleteTopLogo(top_sponsorId){
    $.ajax({
        type: "DELETE",
        url: "/api/top_sponsors",
        data: {top_sponsorId:top_sponsorId},
        success: function(res){
            listTopSponsors(top_sponsorId);
            $("#top_sponsor_logo_img").attr("src", "").hide();
        }
    });
}

function updateTopSponsor(top_sponsor, top_sponsorId){
    $.ajax({
        type: "PATCH",
        url: "/api/top_sponsors",
        data: top_sponsor,
        contentType:false,
        processData:false,
        success: function(){
            listTopSponsors(top_sponsorId)
        }
    });
}

function listTopSponsors(defaultSponsor){

    loadTopSponsors(function(top_sponsors){
        $top_sponsorList = $("#top_sponsors");
        $top_sponsorList.html("<option value='default'>New Sponsor</option>");

        top_sponsors.forEach(function(top_sponsor, id) {
            let $option = $("<option value='" + id + "'>" + top_sponsor.top_sponsor_name + "</option>");
            if(defaultSponsor && defaultSponsor == top_sponsor._id) $option.prop("selected","selected");
            $("#top_sponsors").append($option);
        }, this);

        $('#top_sponsors').formSelect();
    });
}
function loadTopSponsors(callback){
    $.get("/api/top_sponsors", function (data) {
        top_sponsorsOverall = data.top_sponsors;
        callback(top_sponsorsOverall);
    });
}

function loadTopSponsor(top_sponsor){
    $("#top_sponsor_name").val(top_sponsor ? top_sponsor.top_sponsor_name : "");
    $("#delete_top_sponsor").removeClass("disabled").addClass(!top_sponsor ? "disabled" : "");
    $("#id").val(top_sponsor ? top_sponsor._id : "");
    $("#top_sponsor_logo_img").attr("src", (top_sponsor && top_sponsor.logo ? "/top_sponsors/" + top_sponsor.logo : "")).hide();
    if(top_sponsor && top_sponsor.logo) $("#top_sponsor_logo_img").show();
}

// ------------------------------------------------------ End Bottom Sponsors ------------------------------------------------------

function addPlayer(player){
    $.ajax({
        type: "POST",
        url: "/api/players",
        data: player,
        cache: false,
        contentType: false,
        processData: false,
        success: function (res) {
            listPlayers(res.id)
        }
    });
}


function deletePlayer(playerId){
    $.ajax({
        type: "DELETE",
        url: "/api/players",
        data: {userId:playerId},
        success: function(res){  
            listPlayers();
            loadPlayer();
            $("#delete_player").addClass("disabled")
        }
    });
}

function deleteAvatar(playerId) {
    $.ajax({
        type: "DELETE",
        url: "/api/players_avatar",
        data: {userId:playerId},
        success: function (res) {
            listPlayers(playerId);
            $("#avatar_img").attr("src", "").hide();
        }
    });
}

function updatePlayer(player, userId){
    $.ajax({
        type: "PATCH",
        url: "/api/players",
        data: player,
        cache: false,
        contentType: false,
        processData: false,
        success: function(){
            listPlayers(userId)
        }
    });
}

function listPlayers(defaultPlayer){

    loadPlayers(function(players){
        $playerList = $("#players");
        $playerList.html("<option value='default'>New player</option>");

        players.forEach(function(player, id) {
            let $option = $("<option value='" + id + "'>" + player.displayed_name + "</option>");
            // let $option = $("<option value=>" + player.displayed_name + "</option>");
            if(defaultPlayer && defaultPlayer == player._id) $option.prop("selected","selected");
            $("#players").append($option);
        }, this);

        $("#players").formSelect();
    });
}
function loadPlayers(callback){
    $.get("/api/players", function (data) {
        playersOverall = data.players;
        callback(playersOverall);
    });
}

function loadHUDs(callback){
    $.get("/api/huds", function (data) {
        callback(data);
    });
}

function loadPlayer(player){
    $("#sid").val(player ? player.sid : "");
    $("#vis_name").val(player ? player.displayed_name : "");
    $("#avatar_img").attr("src", (player ? "/av/" + player.sid : "")).hide();
    if(player && player.avatar){
        $("#avatar_img").show(); 
    } 
    // $("#avatar").val(player ? player.avatar : "");
    $("#delete_player").removeClass("disabled").addClass(!player ? "disabled" : "");
    // $("#avatar").show();
}


function addHUD(data, callback){
    $.ajax({
        type: "POST",
        url: "/api/huds",
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(res){
            listHUDs(callback);
        }
    });
}
function deleteHUD(instanceId, callback){
    $.ajax({
        type: "DELETE",
        url: "/api/huds",
        data: {id:instanceId},
        success: function(res){
            listHUDs(callback);
        }
    });
}

function listHUDs(cb){
    loadHUDs(function(res){
        let huds = res.huds;
        let instances = res.instances;
        let files = res.files;

        let $instance_example, $hud_example;
        
        $instance_example = $("#instance").clone();
        $hud_example = $("#hud").clone();
        let $instance = $("#instance").clone().attr("id", "");
        let $hud = $("#hud").clone().attr("id", "");

        let hudList = {};

        instances.forEach(function(el) {
            if(!hudList[el.hud]) hudList[el.hud] = [];
            hudList[el.hud].push(el);
        }, this);

        $hudsTable = $("#huds tbody");
        $hudsTable.html("");
        $hudsTable.append($instance_example.hide());
        $hudsTable.append($hud_example.hide());
        
        huds.forEach(function(hud) {
            let $hudRow = $hud.clone().show().appendTo("<tr></tr>");
            $hudRow.find("th:eq(0)").text(hud)

            $hudsTable.append($hudRow);
            if(hudList[hud]){
                hudList[hud].forEach(function(inst) {
                    let $temp = $instance.clone();
                    
                    $temp.show();
                    $temp.find("#name").val(inst.name);
                    $temp.appendTo($("<tr></tr>")).attr("data-hid", inst._id).appendTo($hudsTable);
                    $temp.find('#delay').val(inst.delay);
                    $temp.find("td:eq(3)").html("<a href='/huds/" + inst._id + "'>/huds/" + inst._id + "</a>");
                    $temp.find("#warnings").html('<i class="material-icons">done</i>')

                    if(inst.enabled == true) $temp.find("input[type='checkbox']").prop("checked","true");
                }, this);
            }
            let $status = $hudRow.find("#warnings i");
            if(!files[hud].includes("template.pug") ||  !files[hud].includes("index.js") || !files[hud].includes("style.css")){
                let tip = "Missing files:" + (!files[hud].includes("template.pug") ? ' template.pug,' : "") + (!files[hud].includes("index.js") ? ' index.js,' : "") + (!files[hud].includes("style.css") ? ' style.css,' : "");
                $status.addClass("tooltipped").attr({"data-position":"top", "data-tooltip":tip.substr(0, tip.length -1)}).text("warning")
            } else {
                $status.removeClass("tooltipped").text("done_all");
            }
        }, this);
        if(typeof cb == "function") cb();
    });
}

function setHUD(data){
    $.ajax({
        type: "PATCH",
        url: "/api/huds",
        contentType: 'application/json',
        data: JSON.stringify(data),
        error: function(){
            $("tr[data-hid='" + data.id + "']").find("#warnings").html('<i class="material-icons tooltipped" data-position="top" data-tooltip="Error during request">error_outline</i>');
        },
        success: function(){
            $("tr[data-hid='" + data.id + "']").find("#warnings").html('<i class="material-icons">done</i>');
        }
    });
}