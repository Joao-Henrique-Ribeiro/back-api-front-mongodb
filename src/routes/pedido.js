const express = require('express');
const Pedido = require('../models/pedido');

const router = express.Router();

// Criar um novo pedido
router.post('/', async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).send(pedido);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get todos pedidos
router.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.status(200).send(pedidos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get pedido por ID
router.get('/:id', async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(500).send(error);
    }
  });

// Update um pedido
router.put('/:id', async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!pedido) {
            return res.status(404).send();
        }
        res.send(pedido);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete de um pedido
router.delete('/:id', async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedido) {
            return res.status(404).send();
        }
        res.send(pedido);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;