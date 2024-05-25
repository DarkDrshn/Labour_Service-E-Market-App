import mongoose,{Schema} from "mongoose";


const constructionWokerSchema = new Schema(
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const electricianSchema = new Schema(
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const plumberSchema = new Schema(
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const carpenterSchema = new Schema(
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const plastererSchema = new Schema (
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const painterSchema = new Schema(
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const masonSchema = new Schema(
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const otherSchema = new Schema(
    {
        labourId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LabourInfo',
            required: true
        },
        document: {
            type: String,
            required: true
        },
        subSpecialization: {
            type: String,
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        minCharge: {
            type: Number,
            required: true
        },
        maxCharge: {
            type: Number,
            required: true
        }
    }
)

const ConstructionWoker = mongoose.model('ConstructionWoker',constructionWokerSchema)
const Electrician = mongoose.model('Electrician', electricianSchema);
const Plumber = mongoose.model('Plumber', plumberSchema);
const Carpenter = mongoose.model('Carpenter', carpenterSchema);
const Plasterer = mongoose.model('Plasterer', plastererSchema);
const Painter = mongoose.model('Painter',painterSchema)
const Mason = mongoose.model('Mason',masonSchema)
const other = mongoose.model('Other',otherSchema)

module.exports = {ConstructionWoker, Electrician, Plumber, Carpenter, Plasterer,Painter,Mason,other};