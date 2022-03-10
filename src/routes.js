const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
  // default things
  {
    method: '*',
    path: '/',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => 'About page',
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
