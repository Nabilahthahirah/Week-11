const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;

beforeAll((done) => {
  queryInterface
    .bulkInsert(
      "Todos",
      [
        {
          todo: "Check Email",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Check Git",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Debug Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Pair Program",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Push Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
    .then((_) => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });

  console.log(">>>>>>>> BEFORE ALL <<<<<<<<<<");
});

afterAll((done) => {
  queryInterface
    .bulkDelete("Todos", null, {})
    .then((_) => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });

  console.log(">>>>>>>> AFTER ALL <<<<<<<<<<");
});

describe("testing todos", () => {
  it("find all todos", (done) => {
    request(app)
      .get("/todos")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body, status } = response;

        expect(status).toEqual(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("find todo by id", (done) => {
    request(app)
      .get("/todos/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { status } = response;

        expect(status).toEqual(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("create todo", (done) => {
    request(app)
      .post("/todos")
      .send({
        todo: "Meeting",
        status: false,
      })
      .set("Accept", "application/json")
      .expect(201)
      .then((response) => {
        const { body } = response;

        expect(body.message).toEqual("Todo Created Successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("update todo", (done) => {
    request(app)
      .put("/todos/1")
      .send({
        todo: "Check Email",
        status: true,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;

        expect(body.message).toEqual("Todo Updated Successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("delete todo", (done) => {
    request(app)
      .delete("/todos/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const body = response;
        expect(body._body.message).toEqual("Todo Deleted Successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });
});
