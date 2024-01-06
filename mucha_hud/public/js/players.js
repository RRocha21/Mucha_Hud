
$(document).ready(function(){
    let id = null;

    listPlayers();

    $("#players").change(function(){
        let i = $(this).val();
        loadPlayer(playersOverall[i]);

        if(playersOverall[i]) id = playersOverall[i]._id;

    });
    $("#save_player").click(function(e){
        e.preventDefault();
        let form = $('form')[1];
        let form_data = new FormData(form);

        // let player = {
        //     sid: $("#sid").val(),
        //     displayed_name: $("#vis_name").val(),
        //     avatar: $("#avatar").val()
        // };
        let localId = $("#players").val();
        if(localId == "default"){
            let r = (Math.random() + 1).toString(36);
            form_data.set("_id", r);
            addPlayer(form_data);
            // for (const value of form_data.values()) {
            //     console.log(value);
            //   }
        } else {
            form_data.set("_id", id);
            updatePlayer(form_data, id);
        }
    });
    $("#delete_player").click(function(){
        // form_data.set("_id", $("#sid").val());
        deletePlayer(id);
    })
    $("#delete_avatar").click(function() {
        // form_data.set("_id", $("#sid").val());
        deleteAvatar(id);
      });

});
