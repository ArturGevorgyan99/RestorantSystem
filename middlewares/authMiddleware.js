
 const customerValidation = (req, res, next) => {
    
    const { name, email ,phone} = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    
    next();
}

export {customerValidation};