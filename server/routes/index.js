/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Sign up, Sign in, Sign out
 * definitions:
 * 
 *   Auth_request:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       
 *   Auth_response:
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       id:
 *         type: integer
 *       token:
 *         type: string

 * 
 *   Response_error:
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       message:
 *         type: string
 *         description: 오류 사유
 *       status:
 *         type: integer
 *         description: response code
 */

/**
 * @swagger
 *  paths:
 *    /users/signin:
 *      post:
 *        tags:
 *        - "Users"
 *        summary: "Login process"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "로그인할 이메일과 비밀번호를 전달"
 *          required: true
 *          schema:
 *            $ref: "#/definitions/Auth_request"
 *        responses:
 *          201:
 *            description: "로그인 결과"
 *            schema:
 *              $ref: "#/definitions/Auth_response"
 *          400:
 *            description: "잘못된 데이터"
 *            schema:
 *              $ref: "#/definitions/Response_error"
 *          500:
 *            description: "로그인 오류 & 실패"
 *            schema:
 *              $ref: "#/definitions/Response_error"
 */

 /**
 * @swagger
 *  paths:
 *    /users/signup:
 *      post:
 *        tags:
 *        - "Users"
 *        summary: "Signup process"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "로그인할 이메일과 비밀번호를 전달"
 *          required: true
 *          schema:
 *            $ref: "#/definitions/Auth_request"
 *        responses:
 *          201:
 *            description: "로그인 결과"
 *            schema:
 *              $ref: "#/definitions/Auth_response"
 *          400:
 *            description: "잘못된 데이터"
 *            schema:
 *              $ref: "#/definitions/Response_error"
 *          500:
 *            description: "로그인 오류 & 실패"
 *            schema:
 *              $ref: "#/definitions/Response_error"
 */