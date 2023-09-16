const bcrypt = require('bcrypt');

const hashPassword = async () => {
    const salt = await bcrypt.genSalt(10); //salt indicate how many round, bcrypt need to get into
    console.log(salt);
}
hashPassword();