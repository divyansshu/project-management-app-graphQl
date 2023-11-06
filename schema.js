import { projects, clients } from './sampleData.js'
import gql from "graphql-tag"
import clientModel from './modals/Client.js';
import projectModel from './modals/Project.js';

const typeDefs = gql`
type Client {
id: ID!
name: String!
email: String!
phone: String!
}

type Project {
    id: ID!
    name: String!
    description: String!
    status: String!
    client: Client
}

type Query {
    clients(id: ID!): Client,
    getAllClients: [Client],
    projects(id: ID!): Project,
    getAllProjects: [Project]
}

type Mutation  {
    addClient(name: String!, email: String!, phone: String!): Client!
}
`;


const resolvers = {
    Query: {
        clients: (parent, args) => {
            return clientModel.findById(args.id);
        },

        getAllClients: () => {
         return clientModel.find();
        },

        projects: (_, {id}) => {
              return projectModel.findById(id);
        },
        
        getAllProjects: () => {
            return projects;
        },
    },
    Project: {
        client: (parent) => {
            return clientModel.findById(parent.clientId);
        }
    },

    Mutation: {
        addClient: async (_, {name, email, phone}) => {
               try {
                const newClient = new clientModel({
                    name,
                    email,
                    phone
                });
                const savedClient = await newClient.save();
                return savedClient;

               } catch (error) {
                throw new Error('failed to add a new client to the database', + error.message);
               }
        }
    }
};



export  { typeDefs, resolvers }
