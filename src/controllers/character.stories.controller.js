const axios = require('axios');
const yup = require('yup');
const GenerateHash = require('../helpers/generate.hash');

exports.getCharacterStoriesById = async (req, res) => {
    try {
        const id = req.params.id;
        const schema = yup.object().shape({
            id: yup.number().required()
        });

        if (!(await schema.isValid({ id }))) {
            return res.status(400).json({
                success: false,
                message: 'Id is required'
            });
        }

        let generateKey = new GenerateHash();
        let URI = `${process.env.BASE_URI}/${process.env.API_VERSION}/public/characters/${id}/stories?ts=${generateKey.ts}&apikey=${process.env.PUBLIC_KEY}&hash=${generateKey.hashvalue}`;
        let responseUri = await axios.get(URI);
        res.status(200).json(responseUri.data.data.results);

    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error
        });

    }
}
