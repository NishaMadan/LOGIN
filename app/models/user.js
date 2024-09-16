module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        user_name: String,
        email: String,
        phone_number:String,
        password:String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("user", schema);
    return Tutorial;
  };