var moesifapi = require('../lib/index.js');
var UserModel = require('../lib/Models/UserModel');
var EventModel = require('../lib/Models/EventModel');
var CompanyModel = require('../lib/Models/CompanyModel');
var CampaignModel = require('../lib/Models/CampaignModel');
var expect = require('chai').expect;
var config = moesifapi.configuration;

config.ApplicationId = "Your Moesif ApplicationId";

describe('TestAddEvent', function() {
    it('createEvent() should return 201 HTTP status', function(done) {

        var controller = moesifapi.ApiController;

        var reqHeaders = JSON.parse('{' +
                '"Host": "api.acmeinc.com",' +
                '"Accept": "*/*",' +
                '"Connection": "Keep-Alive",' +
                '"User-Agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)",' +
                '"Content-Type": "application/json",' +
                '"Content-Length": "126",' +
                '"Accept-Encoding": "gzip"' +
            '}');

        var reqBody = JSON.parse( '{' +
                '"items": [' +
                    '{' +
                        '"type": 1,' +
                        '"id": "fwfrf"' +
                    '},' +
                    '{' +
                        '"type": 2,' +
                        '"id": "d43d3f"' +
                    '}' +
                ']' +
            '}');

        var rspHeaders = JSON.parse('{' +
                '"Date": "Tue, 25 Feb 2019 23:46:49 GMT",' +
                '"Vary": "Accept-Encoding",' +
                '"Pragma": "no-cache",' +
                '"Expires": "-1",' +
                '"Content-Type": "application/json; charset=utf-8",' +
                '"Cache-Control": "no-cache"' +
            '}');

        var rspBody = JSON.parse('{' +
                '"Error": "InvalidArgumentException",' +
                '"Message": "Missing field field_a"' +
            '}');

        var metadata = {
          testData: 1,
          metaData2: {
            a: 'abc',
            b: 'abc'
          }
        };
        var reqDate = new Date();
        var eventReq = {
            time: reqDate,
            uri: "https://api.acmeinc.com/items/reviews/",
            verb: "PATCH",
            apiVersion: "1.1.0",
            ipAddress: "61.48.220.123",
            headers: reqHeaders,
            body: reqBody
        };

        var eventRsp = {
            time: (new Date()).setMilliseconds(reqDate.getMilliseconds() + 500),
            status: 500,
            headers: rspHeaders,
            body: rspBody
        };

        var eventModel = {
            request: eventReq,
            response: eventRsp,
            userId: "my_user_id",
            companyId: "my_company_id",
            sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
            metadata: metadata
        };

        var request = controller.createEvent(new EventModel(eventModel), function(error, response, context) {
            console.log(error);

            expect(context.response.statusCode).to.equal(201);
            if (error) done(error);
            else done();
        });
    });
});


describe('TestAddBatchedEvents', function() {
    it('createEventsBatch() should return 201 HTTP status', function(done) {
        var controller = moesifapi.ApiController;

        var reqHeaders = JSON.parse('{' +
                '"Host": "api.acmeinc.com",' +
                '"Accept": "*/*",' +
                '"Connection": "Keep-Alive",' +
                '"User-Agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)",' +
                '"Content-Type": "application/json",' +
                '"Content-Length": "126",' +
                '"Accept-Encoding": "gzip"' +
            '}');

        var reqBody = JSON.parse( '{' +
                '"items": [' +
                    '{' +
                        '"type": 1,' +
                        '"id": "fwfrf"' +
                    '},' +
                    '{' +
                        '"type": 2,' +
                        '"id": "d43d3f"' +
                    '}' +
                ']' +
            '}');

        var rspHeaders = JSON.parse('{' +
                '"Date": "Tue, 25 Feb 2019 23:46:49 GMT",' +
                '"Vary": "Accept-Encoding",' +
                '"Pragma": "no-cache",' +
                '"Expires": "-1",' +
                '"Content-Type": "application/json; charset=utf-8",' +
                '"Cache-Control": "no-cache"' +
            '}');

        var rspBody = JSON.parse('{' +
                '"Error": "InvalidArgumentException",' +
                '"Message": "Missing field field_a"' +
            '}');

        var reqDate = new Date();

        var eventReq = {
            time: reqDate,
            uri: "https://api.acmeinc.com/items/reviews/",
            verb: "PATCH",
            apiVersion: "1.1.0",
            ipAddress: "61.48.220.123",
            headers: reqHeaders,
            body: reqBody
        };

        var eventRsp = {
            time: (new Date()).setMilliseconds(reqDate.getMilliseconds() + 300),
            status: 500,
            headers: rspHeaders,
            body: rspBody
        };

        var eventModel = {
            request: eventReq,
            response: eventRsp,
            userId: "my_user_id",
            companyId: "my_company_id",
            sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
            metadata: {
              foo: 'abc',
              bar: 'efg'
            }
        };

        var events = [new EventModel(eventModel),
          new EventModel(eventModel),
          new EventModel(eventModel),
          new EventModel(eventModel)];

        var request = controller.createEventsBatch(events, function(error, response, context) {

            expect(context.response.statusCode).to.equal(201);
            if (error) done(error);
            else done();
        });
    });
});

describe('TestUpdateUser', function() {
  it('updateUser() should be success with 201 status', function(done) {
    var controller = moesifapi.ApiController;

    var campaign = new CampaignModel({utmSource: "Newsletter", utmMedium: "Email"});

    var user = {
        userId: "12345",
        companyId: "67890",
        sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
        metadata: {
          email: "johndoe@acmeinc.com",
          string_field: "value_1",
          number_field: 0,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        },
        campaign: campaign
    };

    var request = controller.updateUser(new UserModel(user), function(error, response, context) {
      expect(context.response.statusCode).to.equal(201);
      if (error) done(error);
      else done();
    });
  });
});

describe('TestUpdateUsersBatch', function() {
  it('updateUsersBatch() should be success with 201 status', function(done) {
    var controller = moesifapi.ApiController;
    var userA = {
        userId: "12345",
        companyId: "67890",
        sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
        metadata: {
          email: "johndoe@acmeinc.com",
          string_field: "value_1",
          number_field: 0,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        }
    };

    var userB = {
        userId: "1234",
        companyId: "6789",
        sessionToken: "23jdf0oszfexfqe[lwjfiefovprewv4d8ayrcdx8nu2ng]zfeeadedefx43f",
        metadata: {
          email: "maryjane@acmeinc.com",
          string_field: "value_1",
          number_field: 1,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        }
    };

    var users = [new UserModel(userA), new UserModel(userB)];

    var request = controller.updateUsersBatch(users, function(error, response, context) {
      expect(context.response.statusCode).to.equal(201);
      if (error) done(error);
      else done();
    });
  });
});

describe('TestGetAppConfig', function() {
  it('getAppConfig() should return 200 HTTP status', function(done) {
    var controller = moesifapi.ApiController;
    var request = controller.getAppConfig(function(error, response, context) {
      expect(context.response.statusCode).to.equal(200);
      if (error) done(error);
      else done();
    });
  });
});

describe('TestUpdateCompany', function() {
  it('updateCompany() should be success with 201 status', function(done) {
    var controller = moesifapi.ApiController;

    var campaign = new CampaignModel({utmSource: "Adwords", utmMedium: "Twitter"});

    var company = {
        companyId: "12345",
        sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
        metadata: {
          email: "johndoe@acmeinc.com",
          string_field: "value_1",
          number_field: 0,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        },
        campaign: campaign
    };

    var request = controller.updateCompany(new CompanyModel(company), function(error, response, context) {
      expect(context.response.statusCode).to.equal(201);
      if (error) done(error);
      else done();
    });
  });
});

describe('TestUpdateCompaniesBatch', function() {
  it('updateCompaniesBatch() should be success with 201 status', function(done) {
    var controller = moesifapi.ApiController;
    var companyA = {
        companyId: "12345",
        sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
        metadata: {
          email: "johndoe@acmeinc.com",
          string_field: "value_1",
          number_field: 0,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        }
    };

    var companyB = {
      companyId: "67890",
      metadata: {
        email: "johndoe@acmeinc.com",
        string_field: "value_1",
        number_field: 0,
        object_field: {
          field_a: "value_a",
          field_b: "value_b",
          field_c: "value_c"
        }
      }
  };

    var companies = [new CompanyModel(companyA), new CompanyModel(companyB)];

    var request = controller.updateCompaniesBatch(companies, function(error, response, context) {
      expect(context.response.statusCode).to.equal(201);
      if (error) done(error);
      else done();
    });
  });
});
