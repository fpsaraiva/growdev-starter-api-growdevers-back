import apiGrowdevers from '../services/apiGrowdevers';

class SessionController {
  async store(request, response) {
    try {
      const { username, password } = request.body;

      const { data } = await apiGrowdevers.post('/login', {
        username,
        password,
      });

      return response.json(data);
    } catch (error) {
      return response
        .status(error.status || 400)
        .json({ error_message: error.response.data.message });
    }
  }
}

export default new SessionController();
