var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    },
}, {
    timestamps: true
})

var flightSchema = new Schema({
    airline: {
        type: String,
        },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            var date = new Date();
            return new Date(date.setFullYear(date.getFullYear() + 1));
        }},
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    destinations:  [destinationSchema],
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
    }, 
    {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);