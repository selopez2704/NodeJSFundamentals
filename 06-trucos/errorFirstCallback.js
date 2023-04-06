function asincrona(callback){
    setTimeout(function(){
        try {
            let a = 3 + z
            callback(null, a)
        } catch (e) {
            callback(e)
        }
    })
}

asincrona(function(err,dato){
    if (err){
        console.log('Tenemos un error')
        console.log(err.message)
        // throw err
        return false
    }
    else{
        console.log('Todo bien')
    }
})