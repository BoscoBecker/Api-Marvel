const axios = require('axios');
const yup = require('yup');
const env = require('../../config/env');
const GenerateHash = require('../../helpers/generate.hash'); 

exports.getCharacterComicsById = async (req, res) => {

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

        let generateKeyComics = new GenerateHash();
        let URI = `${process.env.BASE_URI}/${process.env.API_VERSION}/public/characters/${id}/comics?ts=${generateKeyComics.ts}&apikey=${process.env.PUBLIC_KEY}&hash=${generateKeyComics.hashvalue}`;
        let GetaCharacterComicsById = await axios.get(URI);

        res.status(200).json(GetaCharacterComicsById.data.data.results);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
}



