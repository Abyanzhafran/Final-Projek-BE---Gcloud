const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler
} = require("./handler")

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  // default things
  {
    method: '*',
    path: '/',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Halaman tidak ditemukan',
  },
]

module.exports = routes;