import { push } from 'connected-react-router';
import { db, FirebaseTimestamp } from '../../firebase';

const productsRef = db.collection('products');

export const saveProduct = (
   name,
   description,
   category,
   gender,
   price,
   images
) => {
   return async dispatch => {
      const timestamp = FirebaseTimestamp.now();

      const data = {
         category,
         description,
         gender,
         images,
         name,
         price: parseInt(price, 10),
         updated_at: timestamp,
      };
      const ref = productsRef.doc();
      const id = ref.id;
      data.id = id;
      data.created_at = timestamp;

      return productsRef
         .doc(id)
         .set(data)
         .then(() => {
            dispatch(push('/'));
         })
         .catch(error => {
            throw new Error(error);
         });
   };
};
