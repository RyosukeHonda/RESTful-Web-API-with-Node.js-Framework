const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js');
/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app
     */
    constructor(app) {
        this.app = app;
        this.blocks = [];
        this.initializeMockData();
        this.getBlockByIndex();
        this.postNewBlock();
        this.pageNotFound();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {

        this.app.get("/block/:index", (req, res) => {
            // Add your code here
            if(req.params.index >=0 && req.params.index < this.blocks.length){
                res.send(this.blocks[req.params.index]);
            } else{
                res.status(404).send("Sorry can't find that!")
            }
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.get("/block", (req, res) => {
            // Add your code here
            res.send('<form method="POST"> '+
                        '<input text name="body" placeholder="Entry body" required>' +
                        '<input type="submit" value="Post Entry">' +
                    '</form>')

        });
        this.app.post("/block", (req, res) => {
            // Add your code here
            if(req.body.body ===""){
                throw 'Type some contents';
            }else{
                let blockAux = new BlockClass.Block(req.body.body);
                blockAux.height = this.blocks.length + 1;
                blockAux.hash = SHA256(JSON.stringify(blockAux)).toString();
                this.blocks.push(blockAux);
                res.send(req.body)
            }
        });
    }

    pageNotFound(){
        this.app.use((req,res)=> res.status(404).send("Sorry can't find that"))
    }

    /**
     * Help method to inizialized Mock dataset, adds 10 test blocks to the blocks array
     */
    initializeMockData() {
        if(this.blocks.length === 0){
            for (let index = 0; index < 10; index++) {
                let blockAux = new BlockClass.Block(`Test Data #${index}`);
                blockAux.height = index;
                blockAux.hash = SHA256(JSON.stringify(blockAux)).toString();
                this.blocks.push(blockAux);
            }
        }
    }

}

/**
 * Exporting the BlockController class
 * @param {*} app
 */
module.exports = (app) => { return new BlockController(app);}