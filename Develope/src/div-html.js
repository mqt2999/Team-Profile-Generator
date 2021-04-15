const fs = requuire('fs')

function addDiv(person){

    switch(person){
        case 'manager':
            fs.appendFile('./dist/index.html',`</div>
    </div>
    
</body>
</html>`, function (error){
    console.log(error)
})
    }
    
}