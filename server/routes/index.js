/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User info
 * 
 *   definitions:
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
 * 
 */

  /**
  * @swagger
  * tags:
  *   name: Notes
  *   description: Cupping and evaluating coffees with taking notes
  */

  /**
  * @swagger
  * tags:
  *   name: Cafes
  *   description: Cafe info by region in Seoul, South Korea 
  */

/**
 * @swagger
 *  paths:
 *    /users/signin:
 *      post:
 *        tags:
 *        - "Users"
 *        summary: "로그인"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "로그인할 이메일과 비밀번호를 입력"
 *          required: true
 *          schema:
 *            $ref: "#/definitions/Auth_request"
 *        responses:
 *          201:
 *            description: "로그인 결과"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                email:
 *                  type: string
 *                password:
 *                  type: string

 *          404:
 *            description: "result:unvalid user"

 */

/**
 * @swagger
 *  paths:
 *    /users/signup:
 *      post:
 *        tags:
 *        - "Users"
 *        summary: "회원가입"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "회원가입할 이메일, 사용할 이름, 비밀번호를 입력"
 *          required: true
 *          schema:
 *            properties: 
 *              email:
 *                type: string
 *              username:
 *                 type: string
 *              password:
 *                  type: string
 *            
 *        responses:
 *          201:
 *            description: "회원가입 결과"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                email:
 *                  type: string
 *                username:
 *                 type: string
 *                password:
 *                  type: string
 *              
 *          409:
 *            description: "result: email already exists"
 */

/**
 * @swagger
 *  paths:
 *    /users/signout:
 *      post:
 *        tags:
 *        - "Users"
 *        summary: "로그아웃"
 *        description: ""
 *        
 *        responses:
 *          204:
 *            description: "result: signed out"

 */

  /**
 * @swagger
 *  paths:
 *    /notes:
 *      get:
 *        tags:
 *        - "Notes"
 *        summary: "해당 사용자가 등록한 모든 노트들의 목록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        
 *        responses:
 *          200:
 *            description: "모든 노트들의 목록"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *                user_id:
 *                 type: integer
 *                origin:
 *                  type: string
 *                mall:
 *                  type: string
 *                price:
 *                  type: string
 *                feature:
 *                  type: string
 *                rating:
 *                  type: integer
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found notes for the user"
 */

/**
 * @swagger
 *  paths:
 *    /notes/{note_id}:
 *      get:
 *        tags:
 *        - "Notes"
 *        summary: "해당 사용자의 노트 목록 중 특정 노트의 세부 정보"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *          - in: path
 *            name: note_id
 *            schema:
 *              type: integer
 *            required: true
 *        
 *        responses:
 *          200:
 *            description: "한 노트의 세부 정보"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *                user_id:
 *                 type: integer
 *                origin:
 *                  type: string
 *                mall:
 *                  type: string
 *                price:
 *                  type: string
 *                feature:
 *                  type: string
 *                rating:
 *                  type: integer
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found note"
 */

 /**
 * @swagger
 *  paths:
 *    /notes:
 *      post:
 *        tags:
 *        - "Notes"
 *        summary: "새로운 노트 등록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "노트의 각 항목들에 대해 입력"
 *          required: true
 *          schema:
 *            properties: 
 *              name:
 *                type: string
 *              origin:
 *                 type: string
 *              mall:
 *                 type: string
 *              price:
 *                 type: string
 *              feature:
 *                 type: string
 *              flavor:
 *                 type: array
 *                 items:
 *                   type: integer
 *                
 *            
 *        responses:
 *          201:
 *            description: "입력한 항목들이 반영된 노트"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                name:
 *                  type: string
 *                origin:
 *                   type: string
 *                mall:
 *                    type: string
 *                price:
 *                    type: string
 *                feature:
 *                    type: string
 *                flavor:
 *                    type: array
 *                    items:
 *                     type: integer
 *          422:
 *            description: "result: invalid info for saving note"
 */

  /**
 * @swagger
 *  paths:
 *    /notes/{note_id}:
 *      put:
 *        tags:
 *        - "Notes"
 *        summary: "등록된 노트 수정"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "path"
 *          name: "note_id"
 *          schema: 
 *            type: integer
 *          required: true
 *        - in: "body"
 *          name: "body"
 *          description: "수정할 항목에 대해 입력"
 *          required: true
 *          schema:
 *            properties: 
 *              name:
 *                type: string
 *              origin:
 *                 type: string
 *              mall:
 *                  type: string
 *              price:
 *                  type: string
 *              feature:
 *                  type: string
 *              flavor:
 *                 type: array
 *                 items:
 *                   type: integer
 *            
 *        responses:
 *          201:
 *            description: "입력한 항목들이 반영되도록 수정된 노트"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                name:
 *                  type: string
 *                origin:
 *                   type: string
 *                mall:
 *                    type: string
 *                price:
 *                    type: string
 *                feature:
 *                    type: string
 *                flavor:
 *                 type: array
 *                 items:
 *                   type: integer
 *          422:
 *            description: "result: invalid info for modifying note"
 */

/**
 * @swagger
 *  paths:
 *    /notes/{note_id}:
 *      delete:
 *        tags:
 *        - "Notes"
 *        summary: "등록된 노트 삭제"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *          - in: path
 *            name: note_id
 *            schema:
 *              type: integer
 *            required: true
 *        
 *        responses:
 *          200:
 *            description: "result: note deleted"
 *            
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found note to delete"
 */

  /**
 * @swagger
 *  paths:
 *    /notes/flavor/all:
 *      get:
 *        tags:
 *        - "Notes"
 *        summary: "노트의 항목 중 하나인 flavor들의 목록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        
 *        responses:
 *          200:
 *            description: "모든 flavor의 목록"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found flavors"
 */

/**
 * @swagger
 *  paths:
 *    /cafes:
 *      get:
 *        tags:
 *        - "Cafes"
 *        summary: "카페 정보가 등록되어 있는 지역의 목록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        
 *        responses:
 *          200:
 *            description: "모든 지역의 목록"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found regions"
 */

/**
 * @swagger
 *  paths:
 *    /cafes/region/{region_id}:
 *      get:
 *        tags:
 *        - "Cafes"
 *        summary: "한 지역의 카페 목록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *          - in: path
 *            name: region_id
 *            schema:
 *              type: integer
 *            required: true
 *        
 *        responses:
 *          200:
 *            description: "한 지역의 카페 목록"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *                region_id:
 *                 type: integer
 *                address:
 *                  type: string
 *                sell_beans:
 *                  type: boolean
 *                instagram_account:
 *                  type: string
 *                rating_average:
 *                  type: string
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found cafe"
 */

 /**
 * @swagger
 *  paths:
 *    /cafes/allcafes:
 *      get:
 *        tags:
 *        - "Cafes"
 *        summary: "모든 지역의 전체 카페 목록 (즐겨찾기 기능에 사용)"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        
 *        responses:
 *          200:
 *            description: "모든 지역의 전체 카페 목록"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found cafes"
 */

/**
 * @swagger
 *  paths:
 *    /cafes/region/{region_id}:
 *      get:
 *        tags:
 *        - "Cafes"
 *        summary: "한 지역의 카페 목록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *          - in: path
 *            name: region_id
 *            schema:
 *              type: integer
 *            required: true
 *        
 *        responses:
 *          200:
 *            description: "한 지역의 카페 목록"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *                region_id:
 *                 type: integer
 *                address:
 *                  type: string
 *                sell_beans:
 *                  type: boolean
 *                instagram_account:
 *                  type: string
 *                rating_average:
 *                  type: string
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found cafe"
 */

/**
 * @swagger
 *  paths:
 *    /cafes/{cafe_id}:
 *      get:
 *        tags:
 *        - "Cafes"
 *        summary: "한 카페의 세부 정보"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *          - in: path
 *            name: cafe_id
 *            schema:
 *              type: integer
 *            required: true
 *        
 *        responses:
 *          200:
 *            description: "한 카페의 세부 정보"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *                region_id:
 *                 type: integer
 *                address:
 *                  type: string
 *                sell_beans:
 *                  type: boolean
 *                instagram_account:
 *                  type: string
 *                rating_average:
 *                  type: string
 *              
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found cafe"
 */

/**
 * @swagger
 *  paths:
 *    /cafes:
 *      post:
 *        tags:
 *        - "Cafes"
 *        summary: "사용자가 직접 새로운 카페 정보 등록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "새로운 카페 정보의 각 항목에 필요한 정보 입력"
 *          required: true
 *          schema:
 *            properties: 
 *              name:
 *                type: string
 *              address:
 *                 type: string
 *              region_id:
 *                 type: integer
 *              sell_beans:
 *                 type: boolean
 *              instagram_account:
 *                 type: string                 
 *            
 *        responses:
 *          201:
 *            description: "입력한 항목들이 반영된 노트"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                region_id:
 *                  type: integer
 *                name:
 *                  type: string
 *                address:
 *                   type: string
 *                sell_beans:
 *                    type: string
 *                instagram_account:
 *                    type: string
 *          422:
 *            description: "result: invalid info for saving cafe"
 */

/**
 * @swagger
 *  paths:
 *    /cafes/{cafe_id}:
 *      post:
 *        tags:
 *        - "Cafes"
 *        summary: "특정 카페에 대한 사용자의 리뷰 등록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "path"
 *          name: "cafe_id"
 *          schema: 
 *            type: integer
 *          required: true
 *        - in: "body"
 *          name: "body"
 *          description: "리뷰 등록에 필요한 정보 입력"
 *          required: true
 *          schema:
 *            properties: 
 *              text:
 *                type: string
 *              rating:
 *                 type: integer      
 *            
 *        responses:
 *          201:
 *            description: "입력한 항목들이 반영된 리뷰"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                text:
 *                  type: string
 *                rating:
 *                  type: integer

 *          422:
 *            description: "result: invalid info for saving review"
 */

/**
 * @swagger
 *  paths:
 *    /cafes/rating/{cafe_id}:
 *      get:
 *        tags:
 *        - "Cafes"
 *        summary: "한 카페에 등록된 리뷰 평점의 평균값"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *          - in: path
 *            name: cafe_id
 *            schema:
 *              type: integer
 *            required: true
 *        
 *        responses:
 *          200:
 *            description: "한 카페에 등록된 리뷰 평점의 평균값"
 *            schema:
 *              properties: 
 *                rating:
 *                  type: integer
 *
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot calculated rating"
 */

 /**
 * @swagger
 *  paths:
 *    /cafes/bookmark/all:
 *      get:
 *        tags:
 *        - "Cafes"
 *        summary: "해당 사용자가 즐겨찾기 해 둔 카페들의 목록"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        
 *        responses:
 *          200:
 *            description: "해당 사용자가 즐겨찾기 해 둔 카페들의 목록"
 *            schema:
 *              properties: 
 *                bookmark_id:
 *                 type: array
 *                 items:
 *                   type: integer
 *                cafe_id:
 *                  type: array
 *                  items:
 *                    type: integer

 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found bookmarks"
 */

/**
 * @swagger
 *  paths:
 *    /cafes/bookmark/{cafe_id}:
 *      post:
 *        tags:
 *        - "Cafes"
 *        summary: "특정 카페에 대해 즐겨찾기 추가"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "path"
 *          name: "cafe_id"
 *          schema: 
 *            type: integer
 *          required: true
 *        - in: "body"
 *          name: "body"
 *          description: "즐겨찾기 추가에 필요한 user_id, cafe_id 입력"
 *          required: true
 *          schema:
 *            properties: 
 *              user_id:
 *                 type: integer
 *              cafe_id:
 *                  type: integer
 *                      
 *        responses:
 *          201:
 *            description: "입력한 항목들이 반영된 북마크"
 *            schema:
 *              properties: 
 *                id:
 *                  type: integer 
 *                user_id:
 *                  type: integer
 *                cafe_id:
 *                  type: integer

 *          422:
 *            description: "result: invalid info for saving bookmark"
 */

/**
 * @swagger
 *  paths:
 *    /cafes/bookmark/{note_id}:
 *      delete:
 *        tags:
 *        - "Cafes"
 *        summary: "등록된 즐겨찾기 삭제"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *          - in: path
 *            name: cafe_id
 *            schema:
 *              type: integer
 *            required: true
 *        
 *        responses:
 *          200:
 *            description: "result: bookmark deleted"
 *            
 *          401:
 *            description: "result: token expired"
 * 
 *          422:
 *            description: "result: cannot found bookmark to delete"
 */