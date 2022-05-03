import * as contentful from 'contentful';

export const client = contentful.createClient ({
    //space : 'e2jyvrhf3z9p',
    //accessToken :'gHJwNA71tzCpbxM9mJPGnew2Fwgdczo691FobS36-JE'
    space : process.env.REACT_APP_SPACE_ID,
    accessToken : process.env.REACT_APP_ACCESS_TOKEN,
})
 

