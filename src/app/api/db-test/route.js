// import clientPromise from '../../../../lib/mongodb';// adjust if your mongodb.js is elsewhere

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db();
//     const result = await db.admin().ping();

//     return Response.json({ connected: true, result });
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     return new Response(JSON.stringify({ connected: false, error: error.message }), {
//       status: 500,
//     });
//   }
// }