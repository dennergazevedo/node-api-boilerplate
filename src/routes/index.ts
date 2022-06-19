import { Router } from 'express';

import api from './api';

import { notFoundController } from '../controllers/notfound';

const router = Router();

/* API ROUTES */
router.use('/api/v1', api);

/* NOT FOUND */
router.use('*', notFoundController);

export default router;
