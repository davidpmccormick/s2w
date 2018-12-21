import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

export default async(_, inject) => {
  inject('prismicDom', PrismicDOM);
  inject('prismicApi', await Prismic.api('https://somewheretowear.prismic.io/api/v2'));
};
