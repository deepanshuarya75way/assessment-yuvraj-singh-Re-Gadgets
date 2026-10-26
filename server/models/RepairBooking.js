import mongoose from 'mongoose';

const repairBookingSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    shopId: { type: Number, required: true },
    shopName: { type: String, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    deviceType: { type: String, required: true },
    serviceType: { type: String, required: true },
    issueDescription: { type: String, required: true },
    preferredDateTime: { type: Date, required: true },
    estimatedAmount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ['online', 'cod'],
      default: 'online',
    },
    status: {
      type: String,
      enum: ['pending', 'payment_pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },

    repairDetails:{
      reportedIssues:{
        type:[String],
        default:[],
      },
      servicePerformed:{
        type:[String],
        default:[],
      },
      replacedParts:[
        {
          name:{type:String,trim:true},
          cost:{type:Number,min:0,default:0},
        },
      ],

      totalRepairCost:{
        type:Number,
        min:0,
        default:0,
      },
      warrantyDays:{
        type:Number,
        min:0,
        default:0,
      },
      completedAt:Date,
    },
    beforePhotos:{
      type:[String],
      default:[],
    },
    afterPhotos:{
      type:[String],
      default:[],
    },
    
    isPaid: { type: Boolean, default: false },
    razorpayOrderId: String,
    razorpayPaymentId: String,
  },
  { timestamps: true }
);

export default mongoose.model('RepairBooking', repairBookingSchema);
