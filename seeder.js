const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const seedAdminUser = async () => {
  const NIK='admin'
  const nama_lengkap= 'admin'
  const email= 'admin@admin.com'
  const password= 'admin' // You should hash the password in production

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      NIK: NIK,
      nama_lengkap: nama_lengkap,
      email: email,
      password: hashedPassword,
    },
  });

  console.log('Admin user seeded successfully.');
};

seedAdminUser()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
