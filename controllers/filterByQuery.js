module.exports = function filterByQuery (query, data) {
      let personalityTraitsArray = []

      if(query.personalityTraits) {
            if(typeof query.personalityTraits === 'string') {
                  personalityTraitsArray = [query.personalityTraits]
            } else {
                  personalityTraitsArray = query.personalityTraits
            }
            personalityTraitsArray.forEach(trait => {
                  data = data.filter()
            })
      }
};