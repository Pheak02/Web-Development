const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10); //salt indicate how many round, bcrypt need to get into
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
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
// hashPassword('monkey');
login('monkey', '$2b$10$RelD/rdx1HxXSmziCArkrOOTc4M2Q4AlqhQObeOMgsMK8/Xg9W886')