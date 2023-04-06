const bcrypt =require('bcrypt')

const password = '1234password!'

// bcrypt.hash(password,5,(err,hash) => {
//     console.log(hash)
//     bcrypt.compare(password,hash,(err,res) => {
//         console.log(res);
//         // console.log(err);
//     })
// })

//promise
bcrypt.hash(password,5)
    .then((hash) => {
        console.log(hash)
        return bcrypt.compare(password, hash)
    }).then(function(result) {
        console.log(result);
    });