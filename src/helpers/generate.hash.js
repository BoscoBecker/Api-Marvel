const md5 = require('md5');

module.exports = class GenerateHash {    

     constructor() {
        let time = new Date();
        let ts = time.getTime();        
        
        let hashvalue = md5( ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY );
        
        this.time = new Date();
        this.ts = this.time.getTime();
        this.ts = ts;
        this.hashvalue = hashvalue;
    }
}
