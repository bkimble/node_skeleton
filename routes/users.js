module.exports= function(app) {
  app.get("/users",function(req,res) {
    res.end('Users route is working')    
  });
};
