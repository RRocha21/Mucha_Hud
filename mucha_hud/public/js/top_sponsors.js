$(document).ready(function(){
    let id = null;

    listTopSponsors();

    $("#top_sponsors").change(function(){
        let i = $(this).val();
        loadTopSponsor(top_sponsorsOverall[i]);

        if(top_sponsorsOverall[i]) id = top_sponsorsOverall[i]._id;

    });
    $("#save_top_sponsor").click(function(e){
        e.preventDefault();
        let form = $('form')[3];
        let form_data = new FormData(form);
        let localId = $("#top_sponsors").val();


        if(localId == "default"){
            addTopSponsor(form_data);
        } else {
            form_data.set("_id", id);
            updateTopSponsor(form_data, id);
        }
    });
    $("#delete_top_sponsor").click(function(){
        deleteTopSponsor(id);
    });
    $("#delete_top_sponsor_logo").click(function(){
        deleteTopSponsorLogo(id);
    });

});
