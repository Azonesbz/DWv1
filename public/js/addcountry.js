import { countryWorld } from './countryWorldApi.js'

function getCountry() {
  const country = []
  countryWorld.map(countryTable => {
    country.push(countryTable.name_fr)
  })
  return country
}
export default getCountry