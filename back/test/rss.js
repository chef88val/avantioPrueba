//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Feed = require('../models/rss');

//Require the dev-dependencies
let chai = require('chai');
let expect = require('chai').expect;
let chaiHttp = require('chai-http');
//let server = require('../index');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);
describe ('Model.RSS', ()=>{
    it('Exist',(done)=>{
        let el = new Feed({title:'aaa'});
        console.log(el);
        el.validate(((err,feed)=>{
            console.log(feed+"err"+err)
            //expect(err.errors.title).to.exist;
            done();
        }));
    })
});
describe('Home',()=>{
    it('Exist', (done)=>{
        done();
    })
    it('200', (done)=>{
        chai.request(app).get('/api/home')
        .end(((err,res)=>{
            if(err)console.log("***"+err)
            res.should.have.status(200);
        }));
        done();
    })
    it('message', (done)=>{
        chai.request(app).get('/api/home')
        .end(((err,res)=>{
            if(err)console.log("***"+err)
            res.should.have.status(200);
            res.body.should.have.property('message')
            res.body.should.have.property('message').eqls('home OK');
        }));
        done();
    })
});