import mongoose  from 'mongoose';

const ProductShema = new mongoose.Schema({
        
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},
{timestamps: true}
)
const Product = mongoose.model('Product', ProductShema);

export default Product;