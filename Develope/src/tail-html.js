const fs = require('fs')

function tail(){
    fs.appendFile('./dist/index.html',`</div>
    </div>
    
</body>
</html>`, function (error){
    console.log(error)
})
}
module.exports = tail;