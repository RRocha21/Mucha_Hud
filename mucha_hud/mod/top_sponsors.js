const db = require('./database.js').top_sponsors;
const fs = require('fs');

db.loadDatabase();

exports.getTopSponsors = (req, res) => {
    db.find({}, (err, top_sponsorList) => {
        if (err) return res.sendStatus(500);
        res.setHeader('Content-Type', 'application/json');
        return res.json({top_sponsors: top_sponsorList});
    });
};

exports.addTopSponsor = (req, res) => {

    let top_sponsor = req.body;
    delete top_sponsor._id;

    if(req.file) top_sponsor.logo = req.file.filename;
    db.insert(top_sponsor, (err, top_newSponsor) => {
        if (err) return res.sendStatus(500);
        return res.status(200).json({id:top_newSponsor["_id"]});
    });
};

exports.updateTopSponsor = (req, res) => {
    let top_sponsor = req.body;
    let top_sponsorId = top_sponsor._id;

    delete top_sponsor._id;

    if(req.file) top_sponsor.logo = req.file.filename;

    function removeLogoFile(err, top_sponsorList){
    
        if(err) return res.sendStatus(500);
        if(!top_sponsorList[0]) return res.sendStatus(200);

        if (top_sponsor.logo == undefined) {
            top_sponsor.logo = top_sponsorList[0].logo;
        } else {
            if(fs.existsSync('./public/top_sponsors/' + top_sponsorList[0].logo)) fs.unlinkSync('./public/top_sponsors/' + top_sponsorList[0].logo);
        }

        db.update({ _id: top_sponsorId }, { $set: { top_sponsor_name: top_sponsor.top_sponsor_name, logo: top_sponsor.logo } }, {}, (err, numReplaced) => {
            if (err) return res.sendStatus(500);
            return res.sendStatus(200);
        });
    }

    
    db.find({_id:top_sponsorId}, removeLogoFile);
};
exports.deleteTopSponsor = (req,res) => {
    
    let top_sponsorId = req.body.top_sponsorId;

    function removeSponsor(err, top_sponsorList) {
        if(err) return res.sendStatus(500);
        if(!top_sponsorList[0]) return res.sendStatus(200);

        if(fs.existsSync('./public/top_sponsors/' + top_sponsorList[0].logo)) fs.unlinkSync('./public/top_sponsors/' + top_sponsorList[0].logo);

        db.remove({_id:top_sponsorId}, {}, (err, numRemoved) => {
            if(err || numRemoved != 1) return res.sendStatus(500);
            return res.sendStatus(200);
        });
    }

    db.find({_id:top_sponsorId}, removeSponsor);
};
exports.deleteTopLogo = (req,res) => {
    let top_sponsorId = req.body.sponsorId;

    function removeLogoFile(err, top_sponsorList){
        if(err) return res.sendStatus(500);
        if(!top_sponsorList[0]) return res.sendStatus(200);

        if(fs.existsSync('./public/top_sponsors/' + top_sponsorList[0].logo)) fs.unlinkSync('./public/top_sponsors/' + top_sponsorList[0].logo);

        db.update({ _id: top_sponsorId }, { $set: {logo:null}}, {}, (err, numReplaced) => {
            if(err) return res.sendStatus(500);
            return res.sendStatus(200);
        });
    }
    db.find({_id:top_sponsorId}, removeLogoFile);
};

exports.render = (req,res) => {
    return res.render('top_sponsors', {
        ip: address,
        port: hud_port,
        flags: getFlags()
    });
};