const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_HW3iSddn2zbL3Jd8T5P', {
  host: 'mysql-1dc59d22-dey758489-2650.c.aivencloud.com',
  port: 16942,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true, // Ensure SSL is required
      ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUf6dCOfS9kVzVNAknPEDRPaM1UqEwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYTgyNTBkMDAtODc5OS00ODYwLTgyNzAtZDY1YmM0NmYy
ZGI4IFByb2plY3QgQ0EwHhcNMjUwMTAyMDgyNTQyWhcNMzQxMjMxMDgyNTQyWjA6
MTgwNgYDVQQDDC9hODI1MGQwMC04Nzk5LTQ4NjAtODI3MC1kNjViYzQ2ZjJkYjgg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALkqzSr0
bTuTn/GKXSQpap+MHrCu7xinatF1Z0qtaaxw0ax7UaAZBSzKM6CJK57c98s1mnOq
Vn17YqS5lltJarzK3FVR0mHXl5OfR5opBW4aVhyRPgdOBKzSZJjA3ns7b+DIRdVS
uCFK8tw3WxZt0+XAYn/g/SYeY4TZFghGSW9KT8JzXiyKdwG5EATZb/cvcldFy19k
9GkPgBqpf5Fip8qRbhM8WU5b+5wO/IlLYjvzMqmNf5Rh9/h33ATfQvFDdQBHsTUP
DdZ+8wYS62feX77S2S6nXNISHZnwY0zxttQBi+HziKwYHlOMCO/J9IuBVFq6il7E
seuL8J4Xm1WNpsNrtKxtEwnnwHXT89+lU6aJMVRUpFpmkYYfk8tLSVZWKzMuE14+
r5H6kiWnL97mlEb7lBA8G82S+CqmVPuQ3w5KlwB91022WGE9g6BlZD4OLUzLvqQh
tOZbXeIDZBmo8XSaODcdf77Fk7CezW9skeQ0gj32Rr1i7NfQWQU0YPU9gwIDAQAB
oz8wPTAdBgNVHQ4EFgQUbnp1RyDCu6M7+kUv7SHFIjZbaCcwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBACKu/j+H3gJilpBB
DSkVyTUoDsnrRjd8b5BrtegiCDuoPfBZW4gE4QCTYVen2F+QYZqRQ3iy/NPbt+cf
Z2ltECWKWS6/DNpVsN1tEuEWjSpN6+7Npqb2crUGg2oUwSnWSlnMZ9CB3/icxRyf
x9Pgu4K2ENEJFMmKamUDUHYoaTXeJ2vKX7qksKDMAr9xLt1j+MlTIKpO1R/9I1fJ
xCAhu2QwFN3xUtWSA/B/WyPL8EQN7PnwdC/x7/o4AdIOBzrcdx/8HF6Uk96H2J4f
Cg8Tc/oDqyAO49f328MA68RD95EyiyzxtbSeGVx7Dxg/D6T9QyQ2QQMAVwSYE8Mv
TepnhDN4oVoprkpmdiQNnAo9G6LTP2jp7TBVbQjfk+HDER0acyFu9S3VUMZWpylG
EAfZ5Rz35jNKTs4FvmxK+UhmJJScSoDBHt3FFLQpWc7NZ0BgWA66fGsMsFDkn116
9U5/tRBEV2Vo+yWAC2gx57iAbeoal1vArvY3j1P5SZH4Ja3ZcA==
-----END CERTIFICATE-----`,
    },
  },
  logging: false, // Disable logging if not needed
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
