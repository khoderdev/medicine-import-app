const express = require('express');
const router = express.Router();
const hospitalizationController = require('../controllers/hospitalizationController');

/**
 * @swagger
 * /operation/private/{system}:
 *   get:
 *     summary: Retrieve a list of private operations by system
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: system
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of private operations
 *       '500':
 *         description: Internal server error
 */
router.get('/operations/private/:system', hospitalizationController.searchOperationsBySystemPrivate);

/**
 * @swagger
 * /operations/public/{system}:
 *   get:
 *     summary: Retrieve a list of public operations by system
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: system
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of public operations
 *       '500':
 *         description: Internal server error
 */
router.get('/operations/public/:system', hospitalizationController.searchOperationsBySystemPublic);

/**
 * @swagger
 * /operation/private/{query}:
 *   get:
 *     summary: Search for a private operation
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A private operation
 *       '500':
 *         description: Internal server error
 */
router.get('/operation/private/:query', hospitalizationController.searchOperationPrivate);

/**
 * @swagger
 * /operation/public/{query}:
 *   get:
 *     summary: Search for a public operation
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A public operation
 *       '500':
 *         description: Internal server error
 */
router.get('/operation/public/:query', hospitalizationController.searchOperationPublic);

/**
 * @swagger
 * /operation/hospital/{hospitalName}:
 *   get:
 *     summary: Search for an operation by hospital name
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: hospitalName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: An operation at the specified hospital
 *       '500':
 *         description: Internal server error
 */
router.get('/operation/hospital/:hospitalName', hospitalizationController.searchOperationByHospitalName);

/**
 * @swagger
 * /operation/{operationId}:
 *   get:
 *     summary: Get an operation by ID
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: operationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: An operation with the specified ID
 *       '500':
 *         description: Internal server error
 */
router.get('/operation/:operationId', hospitalizationController.getOperationById);

/**
 * @swagger
 * /operations/{id}/pricing/private:
 *   get:
 *     summary: Get pricing categories for a private operation
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Pricing categories for the private operation
 *       '500':
 *         description: Internal server error
 */
router.get('/operations/:id/pricing/private', hospitalizationController.getCategoryPricingByOperationIdPrivate);

/**
 * @swagger
 * /operations/{id}/pricing/public:
 *   get:
 *     summary: Get pricing categories for a public operation
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Pricing categories for the public operation
 *       '500':
 *         description: Internal server error
 */
router.get('/operations/:id/pricing/public', hospitalizationController.getCategoryPricingByOperationIdPublic);

/**
 * @swagger
 * /private/{id}:
 *   get:
 *     summary: Get private operation share by operation ID
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Private operation share
 *       '500':
 *         description: Internal server error
 */
router.get('/private/:id', hospitalizationController.getOperationShareByOperationIdPrivate);

/**
 * @swagger
 * /public/{id}:
 *   get:
 *     summary: Get public operation share by operation ID
 *     tags: [Hospitalizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Public operation share
 *       '500':
 *         description: Internal server error
 */
router.get('/public/:id', hospitalizationController.getOperationShareByOperationIdPublic);

module.exports = router;