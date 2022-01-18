class Singleton {
    static instance;
    constructor(
        connectDB = async () => {
            try {
                await mongoose.connect(
                    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@petshop.gt7ip.mongodb.net/PetShop?retryWrites=true&w=majority`,
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    }
                );
                console.log("Connect success!!");
            } catch (error) {
                console.log("Connect failed!!");
                process.exit(1);
            }
        }
    )
    static Instance(){
        if(instance == null){
            instance = new Singleton();
        }
        return instance;
    }
}

module.exports = Singleton;