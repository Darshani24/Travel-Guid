// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {};

// if (!uri) {
//   throw new Error("❌ Please define the MONGODB_URI environment variable in .env.local");
// }

// let client;
// let clientPromise;

// if (process.env.NODE_ENV === "development") {
//   // Use global variable in development to preserve value across hot reloads
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect()
//       .then((client) => {
//         console.log("✅ [MongoDB] Connected successfully (development)");
//         return client;
//       })
//       .catch((err) => {
//         console.error("❌ [MongoDB] Connection failed (development):", err);
//         throw err;
//       });
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // Create a new client instance in production
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect()
//     .then((client) => {
//       console.log("✅ [MongoDB] Connected successfully (production)");
//       return client;
//     })
//     .catch((err) => {
//       console.error("❌ [MongoDB] Connection failed (production):", err);
//       throw err;
//     });
// }

// export default clientPromise;
