import * as Yup from 'yup';

const filterPageSchema = Yup.object({
  title: Yup.string().min(2, 'мінімум 2 символи'),
});

export default filterPageSchema;
