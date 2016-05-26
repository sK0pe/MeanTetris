/**
 * Created by Pradyumn on 25/05/2016.
 */

module.exports.background = function(req, res){
    res.render('background', {title: "Stash EvilCorp's Cash - Background"});
};

module.exports.references = function(req, res){
    res.render('references', {title: "Stash EvilCorp's Cash - References"});
};

module.exports.rules = function(req, res){
    res.render('rules', {title: "Stash EvilCorp's Cash - Controls and Scoring"});
};

module.exports.game = function(req, res){
    res.render('game', {title: "Stash EvilCorp's Cash - Stashing Cash"});
};

module.exports.login = function(req, res){
    res.render('login', {title: "Stash EvilCorp's Cash - Employee of the Minute"});
};

module.exports.error = function(req, res){
    res.render('error', {title: "Stash EvilCorp's Cash - Can't Stash Here!"});
};