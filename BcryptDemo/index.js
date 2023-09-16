const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login =async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log("Logged you in! successful match!")
    }else{
        console.log("INCORRECT!")
    }
}
hashPassword('monkey');
// login('monkey', '$2b$10$RelD/rdx1HxXSmziCArkrOOTc4M2Q4AlqhQObeOMgsMK8/Xg9W886')