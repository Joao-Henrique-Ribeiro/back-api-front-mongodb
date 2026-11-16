const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true,
    },
    contato: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Pedido', pedidoSchema);