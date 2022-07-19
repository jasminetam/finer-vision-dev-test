export interface DataProps {
  comments: string;
  email: string;
  first_name: string;
  gender: string;
  surname: string;
  tele_num: number;
  day: number;
  month: number;
  year: number;
}

export const initialData: DataProps = {
  comments: '',
  email: '',
  first_name: '',
  gender: '',
  surname: '',
  tele_num: 0,
  day: 0,
  month: 0,
  year: 0,
};
