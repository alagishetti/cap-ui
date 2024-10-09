using { my.rest as my } from '../srv/catalog';



service ExternalAPIService {
  entity ExternalData as projection on my.ExternalData;
}
