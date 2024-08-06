import connectDB from '@/lib/connectDb';
import { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const db = await connectDB();
    const collection = db?.collection('next-auth');
    const newUser = await request.json();
    const res = await collection?.insertOne(newUser);
    return Response.json({
      message: 'new user created',
      res,
    });
    
  } catch (error) {
    return Response.json({
      messege: 'something went wrong',
      error
    });
  }
};
