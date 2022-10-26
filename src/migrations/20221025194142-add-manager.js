export async function up(db, client) {
  await db.collection('managers').insertOne({
    name: 'First Manager',
    email: process.env.ADM_EMAIL,
    password: process.env.ADM_PASSWORD,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  })
}

export async function down(db, client) {
  await db.collection('managers').deleteMany({ email: process.env.ADM_EMAIL })
}