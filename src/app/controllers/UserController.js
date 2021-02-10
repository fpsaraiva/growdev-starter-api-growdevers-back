import apiGrowdevers from '../services/apiGrowdevers';

class UserController {
  // POST /users
  async store(request, response) {
    try {
      const { name, password, type, username } = request.body;

      const growdever = {
        name,
        password,
        type,
        username,
      };

      const { data } = await apiGrowdevers.post('/users', growdever);

      return response.json({ data });
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ error_message: error.response.data.message });
    }
  }

  // GET /users
  async index(request, response) {
    try {
      const authHeader = request.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowdevers.get('/users', options);

      return response.json(data);
    } catch (error) {
      return response
        .status(error.status || 400)
        .json({ error_message: error.response.data.message });
    }
  }

  // As seguintes rotas nao foram implementadas por enquanto
  /* // GET /users/{uid}
  async show(request, response) {
    try {
      const { uid } = request.params;
      const authHeader = request.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowdevers.get(`/users/${uid}`, options);

      return response.json(data.user);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  // PUT /users/{uid}
  async update(request, response) {
    try {
      const authHeader = request.headers.authorization;
      const { uid } = request.params;
      const { name, password, type, username } = request.body;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const growdever = {
        name,
        password,
        type,
        username,
      };

      const { data } = await apiGrowdevers.put(
        `/users/${uid}`,
        growdever,
        options
      );

      return response.json(data);
    } catch (error) {
      return response
        .status(error.status || 400)
        .json({ error_message: error.response.data.message });
    }
  }

  // DELETE /users/{uid}
  async delete(request, response) {
    try {
      const { uid } = request.params;
      const authHeader = request.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowdevers.delete(`/users/${uid}`, options);

      return response.json({ data });
    } catch (error) {
      return response
        .status(error.status || 400)
        .json({ error_message: error.response.data.message });
    }
  } */
}

export default new UserController();
