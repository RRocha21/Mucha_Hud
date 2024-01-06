const db = require('./database.js').bottom_sponsors;
const fs = require('fs');

db.loadDatabase();

exports.getBottomSponsors = (req, res) => {
    db.find({}, (err, bottom_sponsorList) => {
        if (err) return res.sendStatus(500);
        res.setHeader('Content-Type', 'application/json');
        return res.json({bottom_sponsors: bottom_sponsorList});
    });
};

exports.addBottomSponsor = (req, res) => {

    let bottom_sponsor = req.body;
    delete bottom_sponsor._id;

    if(req.file) bottom_sponsor.logo = req.file.filename;
    
    db.insert(bottom_sponsor, (err, bottom_newSponsor) => {
        if (err) return res.sendStatus(500);
        return res.status(200).json({id:bottom_newSponsor["_id"]});
    });
};

exports.updateBottomSponsor = (req, res) => {
    let bottom_sponsor = req.body;
    let bottom_sponsorId = bottom_sponsor._id;

    delete bottom_sponsor._id;

    if(req.file) bottom_sponsor.logo = req.file.filename;

    function removeLogoFile(err, bottom_sponsorList){
    
        if(err) return res.sendStatus(500);
        if(!bottom_sponsorList[0]) return res.sendStatus(200);

        if (bottom_sponsor.logo == undefined) {
            bottom_sponsor.logo = bottom_sponsorList[0].logo;
        } else {
            if(fs.existsSync('./public/bottom_sponsors/' + bottom_sponsorList[0].logo)) fs.unlinkSync('./public/bottom_sponsors/' + bottom_sponsorList[0].logo);
        }

        db.update({ _id: bottom_sponsorId }, { $set: { bottom_sponsor_name: bottom_sponsor.bottom_sponsor_name, logo: bottom_sponsor.logo } }, {}, (err, numReplaced) => {
            if (err) return res.sendStatus(500);
            return res.sendStatus(200);
        });
    }

    
    db.find({_id:bottom_sponsorId}, removeLogoFile);
};
exports.deleteBottomSponsor = (req,res) => {
    
    let bottom_sponsorId = req.body.bottom_sponsorId;

    function removeSponsor(err, bottom_sponsorList) {
        if(err) return res.sendStatus(500);
        if(!bottom_sponsorList[0]) return res.sendStatus(200);

        if(fs.existsSync('./public/bottom_sponsors/' + bottom_sponsorList[0].logo)) fs.unlinkSync('./public/bottom_sponsors/' + bottom_sponsorList[0].logo);

        db.remove({_id:bottom_sponsorId}, {}, (err, numRemoved) => {
            if(err || numRemoved != 1) return res.sendStatus(500);
            return res.sendStatus(200);
        });
    }

    db.find({_id:bottom_sponsorId}, removeSponsor);
};
exports.deleteBottomLogo = (req,res) => {
    let bottom_sponsorId = req.body.sponsorId;

    function removeLogoFile(err, bottom_sponsorList){
        if(err) return res.sendStatus(500);
        if(!bottom_sponsorList[0]) return res.sendStatus(200);

        if(fs.existsSync('./public/bottom_sponsors/' + bottom_sponsorList[0].logo)) fs.unlinkSync('./public/bottom_sponsors/' + bottom_sponsorList[0].logo);

        db.update({ _id: bottom_sponsorId }, { $set: {logo:null}}, {}, (err, numReplaced) => {
            if(err) return res.sendStatus(500);
            return res.sendStatus(200);
        });
    }
    db.find({_id:bottom_sponsorId}, removeLogoFile);
};

exports.render = (req,res) => {
    return res.render('bottom_sponsors', {
        ip: address,
        port: hud_port,
        flags: getFlags()
    });
};