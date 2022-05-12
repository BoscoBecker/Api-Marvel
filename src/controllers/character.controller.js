const axios = require('axios');
const env = require('../config/env');
const GenerateHash = require('../helpers/generate.hash');
const yup = require('yup');


exports.getallCharacters = async (req, res) => {

    try {
        let generateKeyEvents = new GenerateHash();
        let URI = `${process.env.BASE_URI}/${process.env.API_VERSION}/public/characters?ts=${generateKeyEvents.ts}&apikey=${process.env.PUBLIC_KEY}&hash=${generateKeyEvents.hashvalue}`;
        let GetallCharacters = await axios.get(URI);
        
        res.status(200).json(GetallCharacters.data.data.results);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
};


exports.getCharactersById = async (req, res) => {
    
    try {
        const id = req.params.id;
        let generateKeyEvents = new GenerateHash();
        let URI = `${process.env.BASE_URI}/${process.env.API_VERSION}/public/characters/${id}?ts=${generateKeyEvents.ts}&apikey=${process.env.PUBLIC_KEY}&hash=${generateKeyEvents.hashvalue}`;

        const schema = yup.object().shape({
            id: yup.number().required()
        });

        if (!(await schema.isValid({ id }))) {
            return res.status(400).json({
                success: false,
                message: 'Id is required'
            });
        }

        let GetaCharactersById = await axios.get(URI);
        res.status(200).json(GetaCharactersById.data.data.results);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
};
