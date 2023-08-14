const app = require ("../../index.js");

const request = require('supertest');


describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/service");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/service").send({
            title:"what service do you need",
            Icon:"https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description:"we are here to fullfill your needs"

        });

        expect(response.statusCode).toBe(200);
    });
});

describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/about");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/about").send({
            fahFahinYar:"Home",
            Icon:"Guri",
            fahFahin:"we are here to fullfill your needs"

        });

        expect(response.statusCode).toBe(200);
    });
});

describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/companyInfo");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/companyInfo").send({
            name:"Sara",
            location:"Warta",
            logo:"Image",
            email:"S@gmail.com",
            complainEmail: "su@gmail.com",
            complainPhone: "612334455",
            facebook: "SaraF",
            tiktok: "SaraTik",
            twitter: "SaraTwi",
            instigram: "SaraInst",

        });

        expect(response.statusCode).toBe(200);
    });
});

describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/contactForm");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/contactForm").send({
            name:"SuSu",
            phone:"619527351",
            message:"Hi SuSu"

        });

        expect(response.statusCode).toBe(200);
    });
});

describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/gallery");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/gallery").send({
            imageTitle:"Guri",
            image:"Picture of Guri"

        });

        expect(response.statusCode).toBe(200);
    });
});

describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/homeSetting");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/homeSetting").send({
            title:"welcome",
            logo:"logo",
            name:"Badar",
            address:"Dubai",
            email:"B@gmail.com",
            phone:"612345677",
            whatsApp:"612345678",
            facebook:"Badar",
            instagram:"Badar",
            titkok:"Badar",
            heroTitle:"heroT",
            heroDescription:"heroD",
            heroImage:"hIma",
            footerText:"A footer T",

        });

        expect(response.statusCode).toBe(200);
    });
});

describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/house");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/house").send({
            houseType:"Floor",
            houseArea:"Dubai ",
            houseAddress:"Dubai",
            houseAge:"8",
            houseRent:"10000",
            houseDeposit:"5000",
            houseParking:"kkk",
            images:"imm",
            houseStatus:"active",
            houseRooms:"26",
            houseToilet:"6",
            houseMasterRoom:"5",
            houseDescription:"Welc ",

        });

        expect(response.statusCode).toBe(200);
    });
});



describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/ourClient");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/ourClient").send({
            clientName:"DuDi",
            clientLogo:"image"

        });

        expect(response.statusCode).toBe(200);
    });
});

describe("tijaabinta userka get,post deletekooda,update",() =>{
    // get method testing
    it("get testing / waxaan rabnaa ina soo baxdo 200 statusCode", async () => {
        const resp = await request(app).get("/users");
        expect(resp.statusCode).toBe(200);
    });

    it("post testing / should respond with a 200 status code" , async () =>  {
        const response = await request(app).post("/users").send({
            username:"susu22@gmail.com",
            password:"123",
            role:"admin",
            userStatus:"active",

        });

        expect(response.statusCode).toBe(200);
    });
});



