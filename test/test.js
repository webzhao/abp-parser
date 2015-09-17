var assert = require("assert");
var parser = require(__dirname + "/../");
var fs = require("fs");

// read test file content
var normalAPI = fs.readFileSync(__dirname + "/fixtures/normal-api.md");
var malAPI = fs.readFileSync(__dirname + "/fixtures/mal-api.md");

describe("API Blueprint解析", function() {

    it("should throw error on empty callback", function(done){
        assert.throws(function() {
            parser.parse(normalAPI);
        });
        done();
    });

    it("should work without error", function(done){
        parser.parse(normalAPI, done);
    });

    it("should parse title", function(done){
        parser.parse(normalAPI, function(err, result){
            if (err) {
                throw new Error(err);
            }
            assert.equal("会员中心--发码接口文档说明", result.name);
            done();
        });
    });

    it("should parse host", function(done){
        parser.parse(normalAPI, function(err, result){
            if (err) {
                throw new Error(err);
            }
            assert(result.metadata.length);
            result.metadata.forEach(function(meta){
                if (meta.name === "HOST") {
                    assert.equal("http://code.vip.360.cn", meta.value);
                }
            });
            done();
        });
    });

    it("should parse all two api", function(done){
        parser.parse(normalAPI, function(err, result){
            assert.equal(1, result.resourceGroups.length);
            assert.equal(2, result.resourceGroups[0].resources.length);
            done();
        });
    });

});
