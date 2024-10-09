const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {
  const { ExternalData } = this.entities;

  this.on('READ', ExternalData, async (req) => {
    try {
      // Replace with your actual external API endpoint
      const response = await axios.get('https://gorest.co.in/public/v2/users?access-token=d42af79bf0c5504555fac852242c3ce4e22e1f28e8961719855fac6b6ef40079');
      
      // Map the API response to the OData entity structure
      const data = response.data.map(item => ({
        ID: item.id,
        Name: item.name,
        Details: item.email
      }));

      return data;
    } catch (error) {
      console.error(error);
      req.reject(500, 'Failed to fetch data from external API');
    }
  });
});