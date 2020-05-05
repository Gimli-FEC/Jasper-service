const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);


app.listen(3002, () => console.log(`listening on port 3002!!!!!!!!!!!`));

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

it('gets the games endpoint at 30', async done => {
  const response = await request.get('/games/30')

  expect(response.status).toBe(200);

  done();
})
