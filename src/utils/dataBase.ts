import mongoose from 'mongoose';

const mongoURL = process.env.DATABASE_URL;

interface connection {
  isConnected?: boolean;
}

let connection: connection = {};

async function connectMongo() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState === 1;

    if (connection.isConnected) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(mongoURL as string, {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
  });

  connection.isConnected = db.connections[0].readyState === 1;
  console.log('new connection');
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

const Dbrequest = { connectMongo, disconnect };

export default Dbrequest;
