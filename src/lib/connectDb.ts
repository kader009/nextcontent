import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db : Db | null = null;

const connectDB = async () =>{
  if(db) return db;

  try {
    const uri = process.env.DATABASE_URL;
    if(!uri){
      throw new Error('Please connet your mongodb url')
    }
    const client = new MongoClient(uri as string, {
      serverApi: ServerApiVersion.v1,
      // strict: true,
      // deprecationErrors:true,
    })

    // await client.connect()
    db = client.db('next-auth')
    return db;

  } catch (error) {
    console.log(error);
  }
}

export default connectDB;