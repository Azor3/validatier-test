module.exports = {
    apps: [
      {
        name: "backend",
        script: "npm",
        args: "run start", // Sadece start komutu
        cwd: "/root/apps/validatier/backend",
        env: {
          NODE_ENV: "production",
        }
      },
      {
        name: "frontend",
        script: "npm",
        args: "run start", // Sadece start komutu
        cwd: "/root/apps/validatier/frontend",
        env: {
          NODE_ENV: "production",
        }
      }
    ]
  };