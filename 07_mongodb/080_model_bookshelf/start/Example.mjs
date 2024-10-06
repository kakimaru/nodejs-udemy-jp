import mongoose, { connect, Schema, model } from 'mongoose';

import env from "dotenv";
env.config();

/**
String: 文字列
Number: 数値
Date: 日付
Buffer: バイナリデータ
Boolean: 真偽
Mixed: なんでもOK
ObjectId: Mongo固有のID
Array: 配列
Decimal128: 浮動小数点
Map: マップ
Schema: 他のスキーマ
 */
connect(process.env.MONGO_URI);
/*
const catSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true, enum: [0,1] },
  bool: { type: Boolean, default: false, alias: 'b' },
  dt: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function(val) {
        return val instanceof Date ? val : new Date(val)
    }
  },
  arry: [ String ],
  anything: Mixed,
}, {timestamps: true});
const Cat = model('Cat', catSchema);

const kitty = new Cat();
kitty.name = 'Zildjian';
kitty.size = 1;
kitty.arry = [0,1];
kitty.dt = "2017/12/21";

kitty.save().then((doc) => console.log(doc.b));
*/

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, enum: [1, 2, 3, 4, 5], required: true, default: 3 },
    comment: { type: String, required: true },
    
  },
  { timestamps: true }
);

const Book = model("Book", bookSchema);

const book = new Book({
  title: "test_book",
  description: "This is a description.",
  comment: "great",
  rating: 4,
});

book.save().then((book) => {
  console.log(book._id)
  mongoose.connection.close()
});