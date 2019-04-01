module.exports = {
    "DATABASE_URL": process.env.DATABASE_URL || "sqlite://test.db",
    "HTTP_LISTEN_PORT": process.env.HTTP_LISTEN_PORT || 5000,
    "HTTP_LISTEN_HOST": process.env.HTTP_LISTEN_HOST || "127.0.0.1",
};
