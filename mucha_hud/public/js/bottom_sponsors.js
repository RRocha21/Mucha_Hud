$(document).ready(function(){
    let id = null;

    listBottomSponsors();

    $("#bottom_sponsors").change(function(){
        let i = $(this).val();
        loadBottomSponsor(bottom_sponsorsOverall[i]);


        if(bottom_sponsorsOverall[i]) id = bottom_sponsorsOverall[i]._id;

    });
    $("#save_bottom_sponsor").click(function(e){
        e.preventDefault();
        let form = $('form')[2];
        let form_data = new FormData(form);
        let localId = $("#bottom_sponsors").val();


        if(localId == "default"){
            addBottomSponsor(form_data);
        } else {
            form_data.set("_id", id);
            updateBottomSponsor(form_data, id);
        }
    });
    $("#delete_bottom_sponsor").click(function(){
        deleteBottomSponsor(id);
    });
    $("#delete_bottom_sponsor_logo").click(function(){
        deleteBottomSponsorLogo(id);
    });

});
