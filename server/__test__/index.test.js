const app = require('../index');
const supertest = require('supertest');
const details30 = require('./details30.json');
const details75 = require('./details75.json');

const request = supertest(app);

app.listen(3002, () => console.log(`listening on port 3002!!!!!!!!!!!`));

it('gets the games endpoint at 30', async done => {
  const response30 = await request.get('/games/30')
  console.log(response30.body)
  expect(response30.status).toBe(200);
  expect(response30.body).toMatchObject(details30);
  done();
})

it('gets the games endpoint at 75', async done => {
  const response75 = await request.get('/games/75')

  expect(response75.status).toBe(200);
  expect(response75.body).toMatchObject(details75);
  done();
})
