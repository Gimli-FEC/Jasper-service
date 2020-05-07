const app = require('../index');
const supertest = require('supertest');
const details = require('./details.json');

const request = supertest(app);

app.listen(3002, () => console.log(`listening on port 3002!!!!!!!!!!!`));

it('gets the games endpoint at 30', async done => {
  const response = await request.get('/games/50')

  expect(response.status).toBe(200);
  expect(response.body).toMatchObject(details);
  done();
})
