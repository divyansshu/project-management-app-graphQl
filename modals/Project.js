import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }, 
    status: {
        type: String,
        enum: ["Not Started", "In Progress", "Completed"],
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
});

const projectModel = new mongoose.model('project', ProjectSchema);

export default projectModel;