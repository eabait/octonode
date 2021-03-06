// Generated by CoffeeScript 1.7.1
(function() {
  var Team;

  Team = (function() {
    function Team(id, client) {
      this.id = id;
      this.client = client;
    }

    Team.prototype.info = function(cb) {
      return this.client.get("/teams/" + this.id, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Team info error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.members = function(cb) {
      return this.client.get("/teams/" + this.id + "/members", function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Team members error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.member = function(user, cb) {
      return this.client.get("/teams/" + this.id + "/members/" + user, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        return cb(null, s === 204, h);
      });
    };

    return Team;

  })();

  module.exports = Team;

}).call(this);
