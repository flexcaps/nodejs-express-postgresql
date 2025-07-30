module.exports = {
    HOST:"ep-small-mode-aeev1ikq-pooler.c-2.us-east-2.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD:"npg_xKDEJo4Gf3XA",
    DB: "neondb",
    dialect:"postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle:10000   
    }
};

