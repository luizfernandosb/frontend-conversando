const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserLogin {
  static async handleLogin(email) { // Recebe email diretamente
    return await prisma.user.findUnique({ where: { email } });
  }
}

module.exports = UserLogin;