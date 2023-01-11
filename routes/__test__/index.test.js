import  request from 'supertest';
import app from "../../app";

describe('register', () => {
  it('returns bad request if first name is missing', async () => {
    const res = await request(app).post('/register').send({ firstName: 'Jan' });

    expect(res.statusCode).toEqual(201);
  });

  it('returns bad request if first name is missing', async () => {
    const res = await request(app)
      .post('/register')
      .send({ somethingElse: 'Jan' });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual('you need to pass a firstName');
  });
});
describe('get',()=>
{
  it('returns non  ',async()=>
  {
    const res =await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});