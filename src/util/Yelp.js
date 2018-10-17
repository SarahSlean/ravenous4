const apiKey = 'MhPR3DoGimgP7inpbu4AFnK8JqZApYzC7WgV1vIsxeO_I--KKUGVGfGcq-Jm9cfUxJl4cwwBm0ZUkUuXu-yTFIe4N4ZIp8O1arVC7ApG6aaMq35hFzbKBRfLejFW3Yx';

const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default yelp;