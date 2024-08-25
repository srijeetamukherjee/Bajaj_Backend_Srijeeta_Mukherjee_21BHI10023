// Example middleware check (remove this if causing issues)
const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

// Only apply middleware to certain routes
app.use('/secure-route', auth);
