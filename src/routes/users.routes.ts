import express from 'express';
import UsersController from '../controllers/users.controller';
import { UsersMockRepository } from '../repositories/users.mock-repository';


const repository = new UsersMockRepository();
const controller = new UsersController(repository);

const router = express.Router();

router.post('/', (req,res)=> {
    try {
        return res.json(controller.addItem(req.body));
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', (_, res) => {
    try {
        return res.json(controller.getAllItems());
    } catch (error) {
        res.status(500).json(error);
    }
 });

 router.get('/:id', (req, res) => {
    const id = req.params.id;
    try {
        return res.json(controller.getItemById(id));
    } catch (error) {
        res.status(500).json(error);
    }
 });

 router.get('/find/:name', (req, res) => {
    const name = req.params.name;
    try {
        return res.json(controller.findUserByFirstName(name));
    } catch (error) {
        res.status(500).json(error);
    }
 });

 router.delete('/:id', (req, res) => {
    const id = req.params.id;
    try {
        return res.json(controller.deleteItem(id));
    } catch (error) {
        res.status(500).json(error);
    }
 });

 router.put('/:id', (req, res) => {
    const id = req.params.id;
    try {
        return res.json(controller.updateItem(id, req.body));
    } catch (error) {
        res.status(500).json(error);
    }
 });

 export default router;