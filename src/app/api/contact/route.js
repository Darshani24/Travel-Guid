// import clientPromise from '../../../../lib/mongodb';

// export async function POST(req) {
//   try {
//     const client = await clientPromise;
//     const db = client.db(); // default db from URI
//     const collection = db.collection('contacts');

//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
//     }

//     await collection.insertOne({ name, email, message, createdAt: new Date() });

//     return new Response(JSON.stringify({ success: true }), { status: 201 });
//   } catch (err) {
//     console.error(err);
//     return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
//   }
// }
