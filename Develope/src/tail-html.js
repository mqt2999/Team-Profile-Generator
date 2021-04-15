const fs = require('fs')

function tail(){
    return fs.appendFileSync('./dist/index.html',`</div>
    </div>
    
</body>
</html>`, function (error){
    console.log(error)
})
}
module.exports = tail;